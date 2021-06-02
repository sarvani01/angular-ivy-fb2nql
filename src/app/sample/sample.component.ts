import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input('t') inputText = '';
  constructor() {}

  ngOnInit() {}
  // btnclicked() {
  //   alert(this.inputText);
  // }
}
