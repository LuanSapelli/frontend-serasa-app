import { Debt } from './../../models/debt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class addDebtService {

  getDebtUser = 'http://127.0.0.1:5000/person/debt/09628052977'
  url = 'http://127.0.0.1:5000/debt'

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getDebts():Observable<Debt[]> {
    return this.http.get<Debt[]>(this.getDebtUser)
  }

  public postDebt(debt: Debt) {
    return this.http.post(this.url, debt, { ...this.httpOptions, responseType: 'text' })
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}


