import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

    const roleFlag=localStorage.getItem("type")
    if(roleFlag=="ADMIN"){
      console.log("you are here")
      this.router.navigate(["/admin/home"])
    }
    if(roleFlag=="NORMAL"){
      this.router.navigate(["/user/home"])
    }
    //throw new Error('Method not implemented.');
  }

  submitted = false;
  invalid !: boolean;
  userDetails = {} as User;
  name!: string
  public login = {
    email: "",
    password: ""
  };

  constructor(private userService: UserService, private router: Router) { }

  // ngOnInit(): void {

  // }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required),
  });

  get form() { return this.loginForm.controls }


  loginFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }
    //console.log("loginFormSubmit()" + this.login);
    this.userLogin()
  }

  userLogin() {
    this.userService.loginUser(this.login.email, this.login.password).subscribe(val => {
      console.log(val);
      this.userService.isLogged(val)
      if (val == "ADMIN") {
        this.invalid = false
        // this.router.navigate(['admin']);
        this.router.navigate(["/admin/home"])
        //this.userService.loginStatusSubject.next(true);
        this.userService.getCurrentUser(this.login.email).subscribe(val => {
          this.userDetails = val;
          //localStorage.setItem('name',this.userDetails.username)
          //this.userService.setUsername(this.userDetails.username);
          //console.log("name is"+this.userDetails.username)
          this.userService.storeDetails(this.login.email, this.userDetails);
          this.userService.loginStatusSubject.next(true);
        });
      }
      if (val == "NORMAL") {
        this.invalid = false;
        //this.userService.storeDetails(val)
        this.router.navigate(['user/home']);
        //this.userService.loginStatusSubject.next(true);
        this.userService.getCurrentUser(this.login.email).subscribe(val => {
          this.userDetails = val;
          this.userService.setUsername(this.userDetails.username)
          //console.log(this.userDetails)
          this.userService.storeDetails(this.login.email, this.userDetails);
          this.userService.loginStatusSubject.next(true);
        });
      }
      else {
        this.userService.logout();
        this.invalid = true
      }
    });


  }
}
