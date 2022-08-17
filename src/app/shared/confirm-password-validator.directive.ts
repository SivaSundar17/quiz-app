import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pwd= control.get('password');
  const confirmpwd = control.get('confirmPassword');

  return pwd && confirmpwd && pwd.value !== confirmpwd.value ? { mustMatch: true } : null;
};

@Directive({
  selector: '[appConfirmPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordValidatorDirective, multi: true }]
})
export class ConfirmPasswordValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw confirmPasswordValidator(control);
  }

}
