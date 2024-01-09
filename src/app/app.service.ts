import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  validate(token: string) {
    return this.http.get<unknown>(`http://195.35.25.230:3000/validate?token=${token}`, { observe: 'response' })
      .pipe(
        map(() => true),
        catchError((err) => {
         console.log(err);
          return of(false)
        })
      );
  }

  consume(token: string) {
    return this.http.get<unknown>(`http://195.35.25.230:3000/consume?token=${token}`, { observe: 'response' })
      .pipe(
        map(() => true),
        catchError((err) => {
         console.log(err);
          return of(false)
        })
      );
  }
}
