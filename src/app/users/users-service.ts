import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userUpdate = new Subject<User[]>();
  private users: User[] = [];
  constructor() {}

  getUser(index: number) {
    return this.users[index];
  }

  getUsers() {
    return this.users.slice();
  }

  setUsers(users: User[]) {
    this.users = users;
    this.userUpdate.next(this.users.slice());
  }
}
