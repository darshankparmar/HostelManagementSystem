import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { TokenStorageService } from '../token-storage.service';
import { User } from '../user';

interface UserDto {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$ = new Subject<User>();
  private apiUrl = 'http://localhost:4050/api/auth/';

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) { }
  
  login(currentUsername: string, currentPassword: string) {
    const loginCredentials = { currentUsername, currentPassword };
    // console.log('login credentials', loginCredentials);

    return this.httpClient
    .post<UserDto>(`${this.apiUrl}SignIn`, loginCredentials)
    .pipe(
      switchMap(({ user, token }) => {
        this.setUser(user);
        this.tokenStorage.setToken(token);
        // console.log('found user', user);
        return of(user);
      }),
      catchError(err => {
        // console.log(`Your login details could not be verified. Please try again`, err);
        return throwError(`Your login details could not be verified. Please try again`);
      })
    );
  }

  logout() {
    // remove user from subject
    this.setUser(null);
    // remove token from localStorage
    this.tokenStorage.removeToken();
    console.log('user logout successfully');
  }

  get user() { return this.user$.asObservable(); }

  signup(userToSave: any) {
    return this.httpClient.post<any>(`${this.apiUrl}SignUp`,userToSave).pipe
    (
      switchMap(({user, token}) => {
        this.setUser(user);
        this.tokenStorage.setToken(token);
        console.log(`user registered successfully`, user);
        return of(user);
      }),
      catchError(err => {
        console.log(`server error occured`, err);
        return throwError(`Registration failed please contact to admin`);
      })
    );

  }

  findMe() {
    const token = this.tokenStorage.getToken();
    if(!token) {
      return EMPTY;
    }

    return this.httpClient.get<any>(`${this.apiUrl}findme`).pipe
    (
      switchMap(({ user }) => {
        this.setUser(user);
        // console.log('found user', user);
        return of(user);
      }),
      catchError(err => {
        console.log(`Your login details could not be verified. Please try again`, err);
        return throwError(`Your login details could not be verified. Please try again`);
      })
    );
  }

  private setUser(user: any) {
    this.user$.next(user);
  }

}

