import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NpmPackageInfo } from './modal/package';
import { PackageSearchService } from './service/package-search.service';

@Component({
  selector: 'app-http-params',
  templateUrl: './http-params.component.html',
  styleUrls: ['./http-params.component.scss'],
})
export class HttpParamsComponent implements OnInit {
  withRefresh = false;
  packages$: Observable<NpmPackageInfo[]>;
  private searchText$ = new Subject<string>();

  constructor(private packageService: PackageSearchService) {}

  ngOnInit(): void {
    this.packages$ = this.searchText$.pipe(
      debounceTime(500), // emit value after some time passed
      distinctUntilChanged(), // dont make a search until old value and new value are some
      switchMap((
        packageName // used to combine/flatten/ merge into one and together emit
      ) => this.packageService.search(packageName, this.withRefresh))
    );
  }

  toggleRefresh(): void {
    this.withRefresh = !this.withRefresh;
  }

  search(packageName): void {
    console.log(packageName);
    this.searchText$.next(packageName);
  }
}
