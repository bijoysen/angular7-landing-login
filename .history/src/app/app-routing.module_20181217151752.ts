import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LandingComponent } from './pre/landing/landing.component';

const routes: Routes = [];
/*
const routes: Routes = [
  { path: '/', component: LandingComponent }
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
