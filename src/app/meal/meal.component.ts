import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../home/home.component';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal;
  constructor() { }

  ngOnInit() {
  }

}
