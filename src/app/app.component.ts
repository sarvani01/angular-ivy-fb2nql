import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
