import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Testhistory } from 'src/app/model/testhistory';
import { TesthistoryService } from 'src/app/services/testhistory.service';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements OnInit {
  p:number=1
  searchValue!:string
  id!:number
  test!:Testhistory[]
  constructor(
    private _route: ActivatedRoute,
    private testservice:TesthistoryService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    
    this.testservice.getTestHistoryById(this.id).subscribe(
      (data: any) => {
        
        this.test = data;
        console.log(data.id)
      },
      
    );
    // this.testservice.getTestHistory().subscribe(data=>{
    //    this.test=data
    //   // console.log(this.quiz);  
    // })
  }





}
