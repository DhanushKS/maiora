import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-basic-skeleton';
  parentMessage = "message from parent";

  @Input() resultData: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.resultData);
  }
}
