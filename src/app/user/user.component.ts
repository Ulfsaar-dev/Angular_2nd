import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  user : any;
  @Input() users: Array<{ name:string }> = [
    { name:'user1' },
    { name:'user2' },
    { name:'user3' },
  ];
  
  ngOnInit() {
    
  }

}
