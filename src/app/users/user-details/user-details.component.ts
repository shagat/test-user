import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data-service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user: User = new User(0,'eg@eg.com', 'test','test','test');
id!:number;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.route.params['subscribe']((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
      this.dataService.fetchUser(this.id).subscribe((res) => {
        this.user = res;
      });
    })
  }
  onBack(){
    this.router.navigate([''])
  }

}
