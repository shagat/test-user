import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  defaultText = 'default';
  debounceText = 'debounce';
  throttleText = 'throttle';
  q: any;
  constructor() {}

  ngOnInit(): void {}
  onChange(event:string) {
    let timer: any;
    timer = setTimeout(() => {
      console.log(event);
      this.defaultText = 'hello';
    }, 1000);
  }
}
