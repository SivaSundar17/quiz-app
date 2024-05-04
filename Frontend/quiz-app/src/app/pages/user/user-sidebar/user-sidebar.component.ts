import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  str!: string | null 
  id!: number;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onViewProfileClick(){
    this.str=localStorage.getItem('id');
    this.id=Number(this.str);
    console.log("sidebar"+this.id)
    this.router.navigate(['/user/profile/'+this.id]);
  }
  ViewTestHistory(){
    this.str=localStorage.getItem('id');
    this.id=Number(this.str);
    console.log(this.id)
    this.router.navigate(['/user/testHistory/'+this.id]);
  }
}
