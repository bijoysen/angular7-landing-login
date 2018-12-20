import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ReviewComponent } from './review/review.component';
import { LoginOneComponent } from './login-one/login-one.component';
import { LoginTwoComponent } from './login-two/login-two.component';
import { LoginThreeComponent } from './login-three/login-three.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'review', component: ReviewComponent},
  { path: 'login/user', component: LoginOneComponent},
  { path: 'login/email', component: LoginTwoComponent},
  { path: 'login/mobile', component: LoginThreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreRoutingModule { }
