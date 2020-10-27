import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameOnPageComponentComponent } from '../components/game-on-page-component/game-on-page-component.component';
import { WelcomePageFormComponent } from './../components/welcome-page-form/welcome-page-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcomePage', pathMatch: 'full'},
  {path: 'welcomePage', component: WelcomePageFormComponent},
  {path: 'gameOnPage/:id', component: GameOnPageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
