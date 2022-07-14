import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NpmPackageInfo } from '../modal/package';

export const searchUrl = 'https://npmsearch.com/query';

function createHttpOptions(packageName: string, refresh = false): any {
  // example 'https://npmsearch.com/query?q=dom'
  const params = new HttpParams({ fromObject: { q: packageName } });
  const headerMap = refresh ? { 'x-refresh': 'true' } : {};
  const headers = new HttpHeaders(headerMap);
  return { headers, params };
}

@Injectable({
  providedIn: 'root',
})
export class PackageSearchService {
  constructor(private http: HttpClient) {}

  search(packageName: string, refresh = false): Observable<NpmPackageInfo[]> {
    if (!packageName.trim()) {
      return of([]);
    }
    const options = createHttpOptions(packageName, refresh);
    return this.http.get(searchUrl, options).pipe(
      map((data: any) => {
        return data.results.map(
          (entry) =>
            ({
              name: entry.name[0],
              version: entry.version[0],
              description: entry.description[0],
            } as NpmPackageInfo)
        );
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
