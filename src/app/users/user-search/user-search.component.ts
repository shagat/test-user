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
  query: string = '';
  // event!: string;
  constructor() {}

  ngOnInit(): void {}
  onChange(e: any) {
    let timer: any;
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(e.target.value);
      this.defaultText = e.target.value;
    }, 3000);
  }
}
