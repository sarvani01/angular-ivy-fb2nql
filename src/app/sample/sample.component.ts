import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input('t') inputText = '';
  @Output() passtext = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  btnclicked() {
    this.passtext.emit('Event Clicked!!!');
  }
}
