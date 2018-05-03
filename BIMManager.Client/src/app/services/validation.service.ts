import { FormGroup, Form,AbstractControl } from '@angular/forms';
import { MyHttpService } from './http.service';
export class ValidationService {
   
    static b:AbstractControl;
    static myControlName:String;
  
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'requiredEmail': `Email cannot be empty.`,
            'requiredPassword': `Password cannot be empty.`,
            'requiredConfirmPassword': `Password cannot be empty.`,
            'invalidEmailAddress': 'Email is not valid."',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number and special character.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }  

    static emailValidator(control) {
 
        if(control.value.length === 0 || control.value === null) {
            {
                return {'requiredEmail':true}
            }
        }
        else if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } 
        else {                   
        return { 'invalidEmailAddress': true  };
        }
    }

    static passwordValidator(control) {
        if(control.value.length === 0 || control.value === null) {
            {
                return {'requiredPassword':true}
            }
        }
        else if (control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&.]).{6,15}$/)) {
            return null;
        } 
        else {
            return { 'invalidPassword': true };
        }
    }

    static confirmPasswordValidator(control){
        if(control.value.length === 0 || control.value === null) {
            {
                return {'requiredConfirmPassword':true}
            }
        }
    } 
}    
   
     


