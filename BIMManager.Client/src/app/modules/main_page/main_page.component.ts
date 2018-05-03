import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import { MyHttpService } from '../../services/http.service';

@Component({
  selector: 'main-page',
  templateUrl: './main_page.component.html',
  styleUrls: ['./main_page.component.css']
})
export class MainPageComponent {

  projects:any;
  

  constructor(private httpService:MyHttpService) {
    this.showProject();
  }
  showProject(){
    this.httpService.getProjects().subscribe(data => {this.projects = data});
  }

}
