import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  
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
        alert("Updated Successfully")
        this.gotoprofile();
      }) 
  }
  gotoprofile() {
    this.router.navigate(['admin/profile/'+this.user.id]);
  }

}
