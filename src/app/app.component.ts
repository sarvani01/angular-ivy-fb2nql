import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  pText = 'Start editing to see some magic happen :)';
  txt: string = '';
  show: boolean = false;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  passtochild() {
    this.show = true;

    this.name = this.txt;
  }
  catchEvent(evnt) {
    this.pText = evnt;
  }
}
