import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  text: string = 'WELCOME TO SAMPLE PAGE';
  constructor() {}

  ngOnInit() {}
  btnclicked() {
    alert(this.text);
  }
}
