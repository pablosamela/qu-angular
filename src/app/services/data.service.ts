import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private domain = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  get<T>(urlFragment: string ,id = '' ): Observable<T> {
    const url = `${this.domain}/${urlFragment}/${id ? id : ''}`;

    return this.http.get<T>(url).pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something went wrong, please try again later.');
  }
}
