import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../home/home.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  constructor() { }
  
  ngOnInit() {
    
  }

}
