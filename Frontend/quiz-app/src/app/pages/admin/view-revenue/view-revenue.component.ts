import { Component, OnInit } from '@angular/core';
import { Revenue } from 'src/app/model/revenue';
import { RevenueService } from 'src/app/services/revenue.service';


@Component({
  selector: 'app-view-revenue',
  templateUrl: './view-revenue.component.html',
  styleUrls: ['./view-revenue.component.css']
})
export class ViewRevenueComponent implements OnInit {
  p:number=1
  sDate!: string;
  eDate!: string;
  data!: Revenue[];
  tempDate!: string
  isSearched = false;
  totalRev!: Number
  statementTotal = 0;

  displayedColumns: string[] = ['userId', 'userName','Email', 'quizid', 'quizname', 'date', 'amount'];
  dataSource = this.data;


  constructor(private revenueService: RevenueService) { }

  ngOnInit(): void {
    this.totalRevenue();
    this.statementTotal=0;

  }

  fetchRevenues() {
    this.isSearched = true;
    this.revenueService.getRevenues(this.sDate, this.eDate).subscribe(data => {
      this.data = data;
      this.dataSource = this.data;
      this.statementTotal=0;
      data.forEach(element => {
        // console.log(element.amount);
        this.statementTotal = this.statementTotal + element.amount;
      });
      //console.log(this.dataSource)
    })
  }

  totalRevenue() {
    this.revenueService.getTotalRevenue().subscribe(data => {
      this.totalRev = data;
    })
  }

}
