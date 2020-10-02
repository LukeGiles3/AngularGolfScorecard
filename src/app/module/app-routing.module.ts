import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponentComponent } from '../components/welcome-page-component/welcome-page-component.component';
import { GameOnPageComponentComponent } from '../components/game-on-page-component/game-on-page-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcomePage', pathMatch: 'full'},
  {path: 'welcomePage', component: WelcomePageComponentComponent},
  {path: 'gameOnPage', component: GameOnPageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
