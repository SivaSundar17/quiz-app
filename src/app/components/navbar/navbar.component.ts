import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn !: boolean;
  type!: string | null;
  name!: string | null;
  mail!: string | null;
  id!:number;
  str!:string|null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.loginStatusSubject.asObservable().subscribe((data) => {
      console.log(data);
      this.type = this.userService.type;
      this.name=localStorage.getItem('name');
      console.log(this.name)
      //this.name=localStorage.getItem('name')
      //console.log(localStorage.length)
      this.isLoggedIn = this.userService.statusLog()
      //this.userService.getCurrentUser()
      console.log("isLoggedIn" + this.isLoggedIn)
    })

    this.type = localStorage.getItem('type');
    this.name = localStorage.getItem('name')
    this.str=localStorage.getItem('id');
    this.id=Number(this.str);

    if (localStorage.length != 0) {
      this.isLoggedIn = true
    }
    else {
      this.isLoggedIn = false
    }
    console.log("reloaded");
  }


  onLogout() {
    this.userService.logout();
  }
}



