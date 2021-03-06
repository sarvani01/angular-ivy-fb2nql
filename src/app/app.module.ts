import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TitleComponent } from './title.component';
import { SampleComponent } from './sample/sample.component';
import { MydirDirective } from './mydir.directive';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CustomdirDirective } from './customdir.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TitleComponent,
    SampleComponent,
    MydirDirective,
    RecipesListComponent,
    CustomdirDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
