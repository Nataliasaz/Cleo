
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewServiceService} from './new-service.service';
import { MynewcomponentComponent } from './mynewcomponent/mynewcomponent.component';
import { DateComponent } from './date/date.component';
import { CleoComponent } from './cleo/cleo.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MynewcomponentComponent,
    DateComponent,
    CleoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

