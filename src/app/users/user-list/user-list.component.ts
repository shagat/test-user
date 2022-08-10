import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../user.model';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  isCollapsed: boolean = true;
  userDataSub = new Subscription();
  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.userDataSub = this.usersService.userUpdate.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
  }
  onCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
onFilterUser(){
  this.usersService.filterUsers()

}
  onAddUser(){
    this.usersService.addUser();
  }
  ngOnDestroy(): void {
    this.userDataSub.unsubscribe();
  }
}
