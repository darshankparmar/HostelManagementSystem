import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Prices } from '../prices';

@Injectable({
  providedIn: 'root'
})
export class HostelDetailService {

  private prices$ = new Subject<Prices>();
  private apiUrl = 'http://localhost:4050/api/';

  constructor(private httpClient: HttpClient) {}

  get price() { return this.prices$.asObservable(); }

  findHostelPriceDetails() {
    return this.httpClient.get<any>(`${this.apiUrl}prices/findHostelPriceDetails`).pipe
    (
      switchMap(({ price }) => {
        this.setPrice(price);
        // console.log('found price detalis done', price);
        return of(price);
      }),
      catchError(err => {
        return throwError(`Your Hostel Price Details not fetch. Please try again`);
      })
    );
  }

  private setPrice(price: any) {
    this.prices$.next(price);
  }

}
