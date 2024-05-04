import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  id!:number;
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  onProfileClick(){
    this.id=Number(localStorage.getItem("id"))

    this.router.navigate(["user/profile",this.id]);
  }

  onQuizTopicsClick(){
    this.router.navigate(["user/viewQuizzes"])
  }

  onQuizHistoryClick(){
    this.id=Number(localStorage.getItem("id"))
    this.router.navigate(["user/testHistory",this.id])
  }

}
