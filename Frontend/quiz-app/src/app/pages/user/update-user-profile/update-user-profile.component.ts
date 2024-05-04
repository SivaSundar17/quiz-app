import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {


  id!: number;
  // user:User=new User();
  user = {} as User;
  
  constructor(private profileservice:ProfileService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
   
    this.user.id = this.route.snapshot.params['id'];
     this.profileservice.getProfiles(this.user.id).subscribe(data =>{
      this.user=data;
  
        
         })
  }
  onSubmit(){
    this.profileservice.updateprofile(this.user.id,this.user).subscribe(
      data=>{
        this.gotoprofile();
      }) 
  }
  gotoprofile() {
    this.router.navigate(['user/profile/'+this.user.id]);
  }

}
