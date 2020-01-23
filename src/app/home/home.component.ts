import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  newcomponent = "Home";
  users = ['user1', 'user2', 'user3'];
  reports = ['report1', 'report2'];
  meals = ['meal1', 'meal2', 'meal3', 'meal4'];
  ngOnInit() {
    
  }

}
