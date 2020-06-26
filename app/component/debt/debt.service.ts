import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Debt } from './../../models/debt';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DebtService {

  getDebtUrl = 'http://127.0.0.1:5000/person/debt/09628052977'
  url = "http://127.0.0.1:5000/debt/"


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  public getDebt():Observable<Debt[]> {
    return this.http.get<Debt[]>(this.getDebtUrl)
  }

  public deleteDebt(debt: Debt) {
    return this.http.delete<Debt>(this.url + debt.id, this.httpOptions)
    .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  handleError(error: HttpErrorResponse) {
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


