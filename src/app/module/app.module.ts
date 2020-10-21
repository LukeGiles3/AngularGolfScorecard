import { WelcomePageFormComponent } from './../components/welcome-page-form/welcome-page-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../module/material.module';
import { GameOnPageComponentComponent } from './../components/game-on-page-component/game-on-page-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GameOnPageComponentComponent,
    WelcomePageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
