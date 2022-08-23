import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  id!: number
  users = {} as User;

  password!: string
  constructor(
    private profileservice: ProfileService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProfiles();
  }
  private getProfiles() {
    this.profileservice.getProfiles(this.id).subscribe(data => {
      this.users = data;

      // console.log(this.users.username) 
      //this.setPassword(this.users)
    })
  }

  updateprofile(id: number) {
    console.log(id);
    this.router.navigate(['user/profileUpdate', id]);
  }

  // getting user id and navigating to change password form
  changePassword(id: number) {
    console.log(id);
    this.router.navigate(['user/changePassword', id]);
    // localhost/4200/changepassword/9
  }
  // setPassword(users:User[]){
  //   // users.forEach(element => {
  //   //   this.password=element.password;  //this.actaulpass
  //   // });
  //   // this.getPassword();
  // }


}
