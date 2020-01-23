import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ReportComponent } from '../report/report.component';
import { MealComponent } from '../meal/meal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  @Input() users: Array<{ id:number, name:string}> = [
    { id:1, name:'user1'},
    { id:2, name:'user2'},
    { id:3, name:'user3'}
  ];
  
  @Input() reports: Array<{ id:number, name:string}> = [
    { id:1, name:'report1'},
    { id:2, name:'report2'},
  ];
  
  @Input() meals: Array<{ id:number, name:string}> = [
    { id:1, name:'meal1'},
    { id:2, name:'meal2'},
    { id:3, name:'meal3'},
    { id:4, name:'meal4'},
  ];

  ngOnInit() {
    
  }

}
