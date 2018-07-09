import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {WarningAlert} from "./WarningAlert/alert.component";
import {SuccessAlert} from "./SuccessAlert/success.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    SuccessAlert,
    WarningAlert,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
