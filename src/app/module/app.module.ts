import { GameOnPageComponentComponent } from './../components/game-on-page-component/game-on-page-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { WelcomePageComponentComponent } from '../components/welcome-page-component/welcome-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOnPageComponentComponent,
    WelcomePageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }