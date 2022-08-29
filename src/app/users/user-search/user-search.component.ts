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
  timer: any;
  // event!: string;
  constructor() {}

  ngOnInit(): void {}
  onChange(e: any) {
    this.defaultText = e.target.value;
    this.updateDebounceText(e.target.value)
  }

  updateDebounceText(text:string, delay=1000){
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.debounceText = text;
    }, delay)  
  }
}
