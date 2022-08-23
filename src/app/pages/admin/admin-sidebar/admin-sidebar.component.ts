import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  
  id!:number
  str!:string|null
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.str=localStorage.getItem('id');
    // this.id=Number(this.str);
  }

  onViewProfileClick(){
    this.str=localStorage.getItem('id');
    this.id=Number(this.str);
    console.log("sidebar"+this.id)
    this.router.navigate(['/admin/profile/'+this.id]);
  }

}
