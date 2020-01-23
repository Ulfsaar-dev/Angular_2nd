import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  report : any;
  @Input() reports: Array<{ name:string }> = [
    { name:'report1' },
    { name:'report2' },
  ];
  ngOnInit() {
  }

}
