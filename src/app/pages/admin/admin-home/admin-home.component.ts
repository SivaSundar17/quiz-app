import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  id!:number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onProfileClick(){
    this.id=Number(localStorage.getItem("id"));
    this.router.navigate(["admin/profile",this.id]);
  }

  onQuizTopicsClick(){
    this.router.navigate(["admin/viewQuizzes"])
  }

  onRevenueClick(){
    this.router.navigate(["admin/revenue"])
  }

  onRegisteredUsersClick(){
    this.router.navigate(["admin/users"])
  }

  onMaterialsClick(){
    this.router.navigate(["admin/materials"])
  }


}
