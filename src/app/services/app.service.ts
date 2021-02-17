
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Page, User} from '../User';

@Injectable({
  providedIn: 'root',
})

export class AppService {

  userListsPerPage$ = new BehaviorSubject<number>(1);
  userLists$: Observable<Page> | undefined;

  constructor(private httpClient: HttpClient) {
    this.userLists$ = this.userListsPerPage$
      .pipe(switchMap((page) => this.getUsersRequest(page)))
      .pipe(map((e) => e as Page));
  }

  getUsersRequest(page: number): Observable<Page> {
    const options = { params: new HttpParams().set('page', String(page)) };
    const url = 'https://reqres.in/api/users';
    return this.httpClient.get<Page>(url, options).pipe(
      catchError(this.handleError<Page>(`page value error`))
    );
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
