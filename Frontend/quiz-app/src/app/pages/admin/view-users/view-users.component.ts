import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  p:number=1
  title = 'Regustered users';
  ELEMENT_DATA: User[] = [
  ];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.ELEMENT_DATA = data
        console.log(this.ELEMENT_DATA)
      }
    )
  }

  getUserDetails(data: User) {
    this.router.navigate(['admin/profile/' + data.id]);
  }

  //  dataSource = this.ELEMENT_DATA;

  displayedColumns: string[] = ['id', 'name', 'email', 'mobileNo', 'view'];

}
