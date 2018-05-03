import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidationService } from './../services/validation.service';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { MyHttpService } from '../services/http.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ControlMessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[ValidationService, MyHttpService]
})
export class AuthenticationModule {}
