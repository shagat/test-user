import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/data-service';
import { User } from '../user.model';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: User[] = [];
userDataSub = new Subscription;
  constructor(private dataService: DataService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.userDataSub = this.usersService.userUpdate.subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    })
  }
}
