import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-call-external-web-service',
  templateUrl: './call-external-web-service.component.html',
  styleUrls: ['./call-external-web-service.component.scss'],
})
export class CallExternalWebServiceComponent implements OnInit {
  response1: {};
  response2: {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const request1 = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const request2 = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/2'
    );

    const request3 = this.http.get(
      'https://www.w3schools.com/xml/tempconvert.asmx'
    );

    // fork join combines the two responses combinelatest mergemap
    forkJoin(request1, request2).subscribe((res) => {
      this.response1 = res[0];
      this.response2 = res[1];
    });

    request3.subscribe((error) => console.log(error)); // will throw CORS error
    /*Access to XMLHttpRequest at 'https://www.w3schools.com/xml/tempconvert.asmx' from origin 'http://localhost:4200'
    has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  */
  }
}
