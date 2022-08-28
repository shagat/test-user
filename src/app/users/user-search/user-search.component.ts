import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  searchQuery: string = '';
  defaultText = 'default';
  debounceText = 'debounce';
  throttleText = 'throttle';
  constructor() {}

  ngOnInit(): void {}
}
