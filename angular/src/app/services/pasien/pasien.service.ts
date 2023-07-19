import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Pasien } from 'src/app/model/pasien.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PasienService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Pasien[]> {
    return this.http
      .get<Pasien[]>(`${environment.apiUrl}/pasien`)
      .pipe(catchError(this.handleError));
  }

  add(data: any): Observable<any> {
    return this.http
      .post<Pasien>(`${environment.apiUrl}/pasien`, data)
      .pipe(catchError(this.handleError));
  }
  show(id: number): Observable<any> {
    return this.http
      .get<Pasien>(`${environment.apiUrl}/pasien/${id}/detail`)
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
