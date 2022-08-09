import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, catchError, throwError } from 'rxjs';
import { UsersService } from '../users/users-service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private web_api = 'https://reqres.in/api/users?page=1';
  private web_api_single = 'https://reqres.in/api/users/';

  constructor(private http: HttpClient, private userService: UsersService) {}

  fetchUsers() {
    return this.http.get<any>(this.web_api).pipe(
      map((res) => {
        return res['data'];
      }),
      tap((res) => {
        this.userService.setUsers(res)
      }),catchError(this.handleError)
    );
  }
  fetchUser(index:number) {
    return this.http.get<any>(this.web_api_single + index).pipe(
      map((res) => {
        console.log(res)
        return res['data'];
      }),
      tap((res) => {
        console.log(res);
      }),catchError(this.handleError)
    );
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMsg = 'Unexpected error occured'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => {
        return(errorMsg);
      })
    }
    return throwError(() => {
      return (errorMsg);
    })
  }
}
