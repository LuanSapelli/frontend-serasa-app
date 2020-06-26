import { Card } from './../../models/card';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AddCardService {

  getCardUser = 'http://127.0.0.1:5000/person/card/09628052977'
  url = 'http://127.0.0.1:5000/card'

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getCards():Observable<Card[]> {
    return this.http.get<Card[]>(this.getCardUser)
  }

  public postCard(card: Card) {
    return this.http.post(this.url, card, { ...this.httpOptions, responseType: 'text' })
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


