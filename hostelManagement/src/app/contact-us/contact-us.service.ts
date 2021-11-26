import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = 'http://localhost:4050/api/contactUs/';

  constructor(private httpClient: HttpClient) { }

  insertContactForm(contactForm: any) {
    return this.httpClient.post<any>(`${this.apiUrl}contactUsInsert`,contactForm).pipe
    (
      switchMap(({msg}) => {
        return of(msg);
      }),
      catchError(err => {
        console.log(`server error occured`, err);
        return throwError(`failed please contact to admin`);
      })
    );
  }

  showHistory() {
    return this.httpClient.get<any>(`${this.apiUrl}contactUsHistory`).pipe
    (
      switchMap(({ contactHistory }) => {
        return of(contactHistory);
      }),
      catchError(error => {
        const msg = "Contact History not fetch. Please try again";
        return of(msg);
      })
    );
  }

  sendReplyMessage(replyMsg: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/contactReply/addContactReply`,replyMsg).pipe
    (
      switchMap(({msg}) => {
        return of(msg);
      }),
      catchError(err => {
        console.log(`server error occured`, err);
        return throwError(`failed please contact to admin`);
      })
    );
  }

  replyMessageHistory() {
    return this.httpClient.get<any>(`http://localhost:4050/api/contactReply/contactReplyHistory`).pipe
    (
      switchMap(({ contactReplyHistory }) => {
        return of(contactReplyHistory);
      }),
      catchError(error => {
        const msg = "Reply Msg History not fetch. Please try again";
        return of(msg);
      })
    );
  }

}
