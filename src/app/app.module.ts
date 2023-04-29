import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdviceDisplayerComponent } from './advice-displayer/advice-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdviceDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
