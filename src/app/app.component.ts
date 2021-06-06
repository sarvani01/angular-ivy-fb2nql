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

  evenumbers = [2, 4, 6, 8, 10];
  passtochild() {
    this.name = this.txt;
  }
  catchEvent(evnt) {
    this.pText = evnt;
  }
}
