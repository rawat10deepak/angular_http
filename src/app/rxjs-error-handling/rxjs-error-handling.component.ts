import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-error-handling',
  templateUrl: './rxjs-error-handling.component.html',
  styleUrls: ['./rxjs-error-handling.component.scss'],
})
export class RxjsErrorHandlingComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.exampleErrorBlock();
    // this.exampleCatchError();
    // this.exampleFinalize();
    // this.exampleThrowError();
    this.exampleRetry();
  }

  exampleErrorBlock(): void {
    this.http.get('assets/friends1.json').subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
      () => console.log('comepleted')
    );
  }

  exampleCatchError(): void {
    this.http
      .get('assets/friends1.json')
      .pipe(catchError((err) => of([err])))
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
        () => console.log('comepleted')
      );
  }

  exampleThrowError(): void {
    this.http
      .get('assets/friends1.json')
      .pipe(
        catchError((err) => {
          // rethrow the error after caching the error
          return throwError('I got the error');
        })
      )
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
        () => console.log('comepleted')
      );
  }

  exampleFinalize(): void {
    this.http
      .get('assets/friends1.json')
      .pipe(
        catchError((err) => {
          // rethrow the error after caching the error
          console.log('rethrowing the error...' + JSON.stringify(err));
          return throwError(err);
        }),
        finalize(() => {
          // finally block... deintialize variables.. unsubscribe..
          console.log('first finalize block is executed');
        })
      )
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
        () => console.log('comepleted')
      );
  }

  exampleRetry(): void {
    this.http
      .get('assets/friends1.json')
      .pipe(
        retry(1), // retry again 2 times
        catchError((err) => {
          // rethrow the error after caching the error
          console.log('rethrowing the error...' + JSON.stringify(err));
          return throwError(err);
        }),
        finalize(() => {
          // finally block
          console.log('first finalize block is executed');
        })
      )
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err),
        () => console.log('comepleted')
      );
  }
}
