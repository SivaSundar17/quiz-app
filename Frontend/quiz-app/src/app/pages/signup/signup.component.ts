import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors, AbstractFormGroupDirective } from '@angular/forms';
import { User } from 'src/app/model/user'
import { UserService } from 'src/app/services/user.service';
import { confirmPasswordValidator } from 'src/app/shared/confirm-password-validator.directive';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  data = {} as User;
  submitted = false;
  flag!: any;
  signUpForm !: FormGroup;



  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobileNo: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },{
      validators: confirmPasswordValidator
    }
    );
  }

  get form() { return this.signUpForm.controls }

  formSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return
    } else {
      console.log(this.data)
      alert("submitted");
      this.saveUser();
    }
  }

  saveUser() {
    this.userService.addUser(this.data).subscribe({
      next: (val) => console.log(val),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
      // console.log(val),
      // error => console.log(error));
    });


  }

}
