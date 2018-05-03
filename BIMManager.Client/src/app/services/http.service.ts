import { FormGroup, Form,AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Injectable()
export class MyHttpService {
    resp : boolean = false;
    respRegister: boolean = false;
    duplicateEmail:boolean = false;
    projects : any;
    constructor (private http: HttpClient, private router:Router){}

    
    public registerUser(post): boolean{
        this.http.post<any>('http://localhost:5000/api/auth/register', {
        email: post.email,
        password: post.passwords.password,
        confirmPassword: post.passwords.confirmPassword
        })
        .subscribe((response: any) =>
        {
        if(this.checkDuplicates(post.email)){
            this.respRegister= true;
        }  
        console.log(response.status);this.router.navigate(['/mainpage']);
        },
        (err: any) => console.error(err));
        return this.respRegister;
    }

	public loginUser(post): boolean{        
        this.http.post<any>('http://localhost:5000/api/auth/login', {
            email: post.email,
            password: post.password
          })
          .subscribe((response: any) => {
              console.log(response.token);
              this.router.navigate(['/mainpage']); 
              this.resp = true;
            },
          (err: any) => {console.error(err);});
        return this.resp;
    }
    public getProjects(){
        return this.http.get<any>('http://localhost:5000/api/project/getAll')
                        .map((response: any) => response.data);      
    }
    public getUsersEmails(){
        return this.http.get<any>('http://localhost:5000/api/auth/getUsersEmails')
                       .map((response: any) => response.data); 
    }
    
 
  checkDuplicates(control):boolean{
    this.getUsersEmails().subscribe(data => {
   for(let i of data){
        if(control.value === i){
            this.duplicateEmail = true;
            console.log(i);
        }
    }
    ;});
    return this.duplicateEmail;
  }
}