import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pre/home/home.component';
import { FaqComponent } from './pre/faq/faq.component';
import { ReviewComponent } from './pre/review/review.component';
import { LoginOneComponent } from './pre/login-one/login-one.component';
import { LoginTwoComponent } from './pre/login-two/login-two.component';
import { LoginThreeComponent } from './pre/login-three/login-three.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/login1',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'login1',
        component: LoginOneComponent
      },
      {
        path: 'login2',
        component: LoginTwoComponent
      },
      {
        path: 'login3',
        component: LoginThreeComponent
      }
    ]
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
