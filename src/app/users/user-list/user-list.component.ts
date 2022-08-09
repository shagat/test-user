import { Component, OnInit } from '@angular/core';
import { reduce, Subscription } from 'rxjs';

import { User } from '../user.model';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
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
        this.onShow(users)
      }
    );
  }
  onCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  // sortData(users:User[]){
  //   var array=[],obj={
  //     caffeineoverdose:'2517',
  //     workhardplayhard:'761277',
  //     familia:'4633452'
  //    };
  //    for(a in obj){
  //     array.push([a,obj[a]])
  //    }
  //    array.sort(function(a,b){return a[1] - b[1]});
  //    array.reverse();
  // }
  onShow(users: User[]){
    let arr:string[] =[]
    users.forEach((el) => {
      arr.push(el['first_name'])
    })
    console.log(arr);
  }
  onShowClick(){
    console.log(this.users);
  }
}
