import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.css']
})
export class ChangeUserPasswordComponent implements OnInit {

  id!: number;
  user = {} as User;
  userArr!: User[]
  valid!: boolean
  //  store data
  // aftersetpassword = actual password
  // compare oldPassword====actualPassword

  actualPass!: string;
  oldPass!: string;
  newPass!: string;
  confirmPass!: string;

  constructor(private profileservice: ProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user.id = this.route.snapshot.params['id'];
    this.getUserdetailsById();
    //this.getProfileByid(this.user.id);


  }
  getUserdetailsById() {
    this.profileservice.getProfiles(this.user.id).subscribe(data => {
      this.user = data;
      // console.log(this.user.email)
      // console.log(this.user.password)
      this.actualPass = this.user.password;

    })
  }
  onSubmit() {
    //console.log("in onSubmit() method"+this.oldPass)

    this.valid = this.validate(this.oldPass);

    console.log("validated=" + this.valid)
    console.log(this.newPass + " " + this.confirmPass)
    if (this.valid && this.newPass === this.confirmPass) {
      alert("Password Changed Successfully")
      this.user.password = this.newPass;
      this.profileservice.updateprofile(this.user.id, this.user).subscribe(
        data => {
        })
      this.gotoprofile()
    }
    if (!this.valid) {
      alert("enter valid password")
    }
    if (this.newPass != this.confirmPass) {
      alert("password doesnt match")
    }
  }
  // getProfileByid(id:number){
  //   this.profileservice.getProfiles(id).subscribe(val=>{
  //     this.userArr=val;
  //     console.log("getProfileByid method "+val);
  //     this.setPassword(this.userArr)
  //   })
  //   //console.log(this.quizservice.getQuiz());
  // }
  gotoprofile() {
    this.router.navigate(['user/profile/'+this.user.id]);
  }

  getPassword() {
    console.log(this.actualPass)
    return this.actualPass;
  }

  validate(oldPass: string): boolean {
    if (this.actualPass === oldPass) {
      return true;

    }

    else {
      return false;
    }

  }

}
