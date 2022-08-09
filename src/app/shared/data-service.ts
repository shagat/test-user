import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs';
import { UsersService } from '../users/users-service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private web_api = 'https://reqres.in/api/users?page=1';

  constructor(private http: HttpClient, private userService: UsersService) {}
  fetchUsers() {
    return this.http.get<any>(this.web_api).pipe(
      map((res) => {
        return res['data'];
      }),
      tap((res) => {
        console.log(res);
        this.userService.setUsers(res)
      })
    );
  }
}
