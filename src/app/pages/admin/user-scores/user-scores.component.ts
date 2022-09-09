import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Testhistory } from 'src/app/model/testhistory';
import { User } from 'src/app/model/user';
import { TesthistoryService } from 'src/app/services/testhistory.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-scores',
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.css']
})
export class UserScoresComponent implements OnInit {
p:number=1
  searchValue!:string;
  id!:number;
  test!:Testhistory[];
  userVal={} as User;
  constructor(
    private _route: ActivatedRoute,
    private testservice:TesthistoryService,private userService:UserService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    
    this.testservice.getTestHistoryById(this.id).subscribe(
      (data: any) => {
        
        this.test = data;
        //console.log(data.id)
      }
      
    );

    this.userService.getUserById(this.id).subscribe(
      (data:any)=>{
        this.userVal=data;
      }
    );
  }
}
