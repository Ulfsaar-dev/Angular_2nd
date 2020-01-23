import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ReportComponent } from '../report/report.component';
import { MealComponent } from '../meal/meal.component';

export interface Data {
  id:number,
  name:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  
  user_list: Array<Data> = [
    { id:1, name:'John' },
    { id:2, name:'Jane' },
  ];

  meal_list: Array<Data> = [
    { id:1, name:'fork' },
    { id:2, name:'beef' },
    { id:3, name:'vegetable' },
    { id:4, name:'fish' },
  ];

  report_list: Array<Data> = [
    { id:1, name:'first_report' },
    { id:2, name:'second_report' },
    { id:3, name:'third_report' },
  ];

  constructor() {

  }

  ngOnInit() {
    
  }

}
