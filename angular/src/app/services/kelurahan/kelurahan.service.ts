import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Kelurahan } from 'src/app/model/kelurahan.model';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KelurahanService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Kelurahan[]> {
    return this.http
      .get<Kelurahan[]>(`${environment.apiUrl}/kelurahan`)
      .pipe(catchError(this.handleError));
  }

  add(data: any): Observable<any> {
    return this.http
      .post<Kelurahan>(`${environment.apiUrl}/kelurahan`, data)
      .pipe(catchError(this.handleError));
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/kelurahan/${id}`);
  }
  update(data: any, id: number): Observable<any> {
    return this.http.put(`${environment.apiUrl}/kelurahan/${id}`, data);
  }
  show(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/kelurahan/${id}/detail`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
