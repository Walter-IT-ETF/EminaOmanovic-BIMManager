import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {Router} from "@angular/router";
import { MyHttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = null;
  public loginForm:FormGroup;

  constructor(protected fb: FormBuilder, protected httpService: MyHttpService) {
    this.loginForm = this.fb.group({
      'email': [this.email,[ValidationService.emailValidator]],
      'password': [this.password,[ValidationService.passwordValidator]]
    });
  }

  login(post) {
   if(!this.httpService.loginUser(post)){
     this.errorMessage= 'Wrong email or password.'
   }
  }

}
