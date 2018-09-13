import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import {UserService} from './services/user.service';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';

import { UserDataComponent } from './user-data/user-data.component';

import { HttpClientModule } from '@angular/common/http';

import {RoutingModuleModule} from './routing-module.module';
import { RouteGuardService} from './route-guard.service';
import { AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    ModalBasicComponent,
    UserDataComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModuleModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [UserService, RouteGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
