import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'control-messages',
  template: `
  <div style="color:red;" *ngIf="errorMessage !== null">{{errorMessage}}
  </div>`
})
export class ControlMessagesComponent {
  private _errorMessage: string;
  @Input() control: FormControl;
  constructor() { }

  get errorMessage():string{
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched && this.control.dirty) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
