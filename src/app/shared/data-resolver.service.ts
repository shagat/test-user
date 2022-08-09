import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../users/user.model";
import { UsersService } from "../users/users-service";
import { DataService } from "./data-service";

@Injectable({
  providedIn: ('root')
})
export class DataResolverService implements Resolve<User[]>{
  constructor(
    private usersService: UsersService, private dataService: DataService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
    const users = this.usersService.getUsers()
    if(users.length === 0){
      console.log('From the Resolver If')
      return this.dataService.fetchUsers();
    } else{
      console.log('From the Resolver else')
      return users
    }
  }
}
