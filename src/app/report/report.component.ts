import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../home/home.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() report;
  constructor() { }

  ngOnInit() {
  }

}
