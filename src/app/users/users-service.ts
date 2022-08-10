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
    this.users = this.sortArrayObj(users);
    this.userUpdate.next(this.users.slice());
  }

  sortArrayObj(users: User[]){
    users.sort((a,b) => {
      if(a.first_name.toLocaleLowerCase() < b.first_name.toLocaleLowerCase()) return -1;
      if(a.first_name.toLocaleLowerCase() > b.first_name.toLocaleLowerCase()) return 1;
      return 0;
    })
    return users;
  }
}
