import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.less']
})
export class LecturesComponent implements OnInit {
 x=12;
 customers=[];
  constructor( public userService : UsersService) { }


  ngOnInit() {
  }

  incrementX() {
    this.x = this.x + 1;
  }
  dicrementX() {
    this.x = this.x - 1;
  }
  fexrementX() {
    this.x = this.x * 2;
  }
}
