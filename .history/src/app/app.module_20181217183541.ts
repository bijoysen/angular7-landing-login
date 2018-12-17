import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pre/landing/landing.component';
import { LoginComponent } from './pre/login/login.component';
import { LoginOneComponent } from './pre/login-one/login-one.component';
import { LoginTwoComponent } from './pre/login-two/login-two.component';
import { LoginThreeComponent } from './pre/login-three/login-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    LoginOneComponent,
    LoginTwoComponent,
    LoginThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
