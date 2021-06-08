import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1>This is my title</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class TitleComponent {}
