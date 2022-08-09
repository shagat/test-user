import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  animations:[
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(400)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateY(100)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;
  @Input() index!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
