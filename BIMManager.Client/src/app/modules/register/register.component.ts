import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ValidationService} from '../../services/validation.service';
import { FormControl, FormBuilder, Validators,FormGroup,AbstractControl } from '@angular/forms';
import {Router, Route} from "@angular/router";
import { MyHttpService } from '../../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email = '';
  password = '';
  confirmPassword = '';
  registerForm: FormGroup;
  passwords : FormGroup;
  private emails:any;
  errorMessageDuplicateEmail: string = null;

  constructor(protected fb: FormBuilder, protected httpService: MyHttpService) {
  
    this.registerForm = this.fb.group({
      'email': [this.email,[ValidationService.emailValidator]],
      'passwords': this.fb.group({
      'password':[this.confirmPassword,[ValidationService.passwordValidator]],
      'confirmPassword':[this.confirmPassword,[ValidationService.confirmPasswordValidator]]}
      )});
  }
  register(post): void {
    if(!this.httpService.registerUser(post)){
      this.errorMessageDuplicateEmail = "User with this email already exists.";
    }
  }
   
}
