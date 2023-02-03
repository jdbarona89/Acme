import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';

import { SharedModule } from './component/shared/shared.module';



//Angular Material




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
