import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, toArray } from 'rxjs/operators';
import { EMPTY, of, throwError } from 'rxjs';
import { Student } from '../../app/student';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:4050/api/student/';

  constructor(private httpClient: HttpClient, private router: Router) { }

  addStudent(studentToSave: Student) {
    return this.httpClient.post<any>(`${this.apiUrl}addStudent`,studentToSave).pipe
    (
      switchMap(({ student, msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(err => {
        // console.log(`server error occured`, err);
        const msg = 'Registration failed please contact to admin';
        return of(msg);
      })
    );
  }

  updateStudent(studentToUpdate: any) {
    // console.log(`updating student details`);
    // console.log(studentToUpdate);
    return this.httpClient.post<any>(`${this.apiUrl}updateStudent`,studentToUpdate)
    .pipe(
      switchMap(({ msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(error => {
        const msg = "Student Details not Updated. Please try again";
        return of(error);
      })
    );
  }

  removeStudent(studentToRemove: any) {
    return this.httpClient.post<any>(`${this.apiUrl}removeStudent`, studentToRemove)
    .pipe(
      switchMap(({ msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(error => {
        const msg = "Student Details not Removed. Please try again";
        // console.log(error);
        return of(error);
      })
    );
  }

  boysSuperDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/superDeluxeRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Super Delux Room Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/deluxeRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Delux Room Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysStandardRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/standardRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Standard Room Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsSuperDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/superDeluxeRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Super Delux Room Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/deluxeRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Delux Room Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsStandardRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/standardRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Standard Room Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  findHostelPriceDetails() {
    return this.httpClient.get<any>(`http://localhost:4050/api/prices/findHostelPriceDetails`).pipe
    (
      switchMap(({ price }) => {
        // console.log('found price detalis done ', price);
        return of(price);
      }),
      catchError(err => {
        return throwError(`Your Hostel Price Details not fetch. Please try again`);
      })
    );
  }

  updatePriceDetails(priceDetails: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/prices/updatePriceDetails`,priceDetails)
    .pipe(
      switchMap(({ msg }) => {
        return of(msg);
      }),
      catchError(error => {
        const msg = "Price Details not Updated. Please try again";
        return of(error);
      })
    );
  }

  getAllUsers() {
    return this.httpClient.get<any>(`http://localhost:4050/api/users/AllUser`).pipe
    (
      switchMap(({ users }) => {
        return of(users);
      }),
      catchError(err => {
        return throwError(`Users Details not fetch. Please try again`);
      })
    );
  }

  updateUser(user: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/users/userUpdate`,user)
    .pipe(
      switchMap(({ msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(error => {
        const msg = "User Details not Updated. Please try again";
        return of(error);
      })
    );
  }

}
