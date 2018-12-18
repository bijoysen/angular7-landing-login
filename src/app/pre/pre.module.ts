import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreRoutingModule } from './pre-routing.module';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginOneComponent } from './login-one/login-one.component';
import { LoginTwoComponent } from './login-two/login-two.component';
import { LoginThreeComponent } from './login-three/login-three.component';
import { ReviewComponent } from './review/review.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, FaqComponent, LoginOneComponent, LoginTwoComponent, LoginThreeComponent, ReviewComponent],
  imports: [
    CommonModule,
    PreRoutingModule,
    SharedModule
  ]
})
export class PreModule { }
