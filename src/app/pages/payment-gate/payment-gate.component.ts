import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card';
import { QuizPaymentStatus } from 'src/app/model/quizPaymentStatus';

import { CheckoutService } from 'src/app/services/checkout.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-payment-gate',
  templateUrl: './payment-gate.component.html',
  styleUrls: ['./payment-gate.component.css']
})
export class PaymentGateComponent implements OnInit {

  data = {} as Card;
  isValid!: boolean;
  qid!: number;
  uId!: number;
  title!: string | null;
  status = {} as QuizPaymentStatus;

  statusObj = {
    paymentStatus: false,
    user:{
      id:0
    },
    quiz:{
      id:0
    }
  }

  rev = {
    amount: 0,
    user: {
      id: 0
    },
    quiz: {
      id: 0
    }
  }

  constructor(private checkoutService: CheckoutService, private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.data);
    this.validate();

  }
  validate(): boolean {
    this.checkoutService.validatePayment(this.data).subscribe(val => {
      console.log(val);
      this.isValid = Boolean(val);
      if (this.isValid) {
        alert("payment successfull")
        //navigating user back to quiz page
        let str = localStorage.getItem("qid");
        this.qid = Number(str);
        let str2 = localStorage.getItem('id');
        this.uId = Number(str2);
        this.title = localStorage.getItem('title');
        //this.quizService.registeredStatus
        this.quizService.registeredStatus(this.uId, this.qid).subscribe(data => {
          this.status = data;
          // console.log(data);
          if (data == null) {
            //this.isRegistered=false;
            //console.log(this.uId+" "+this.qid);
            this.statusObj.user.id = this.uId;
            this.statusObj.paymentStatus = true,
              this.statusObj.quiz.id = this.qid
            this.quizService.addRegistrationStatus(this.statusObj).subscribe(
              data => {
                //console.log(this.data);
                this.addRevenue();
                // this.router.navigate(['user/instructions/' + this.qid + "/" + this.title])
                // localStorage.removeItem("qid");
              }
            );
          }
          else {
            this.status = data;
            this.status.paymentStatus = true;
            this.quizService.updateRegistrationStatus(this.status.id, this.status).subscribe(
              data => {
                //this.gotoprofile();
                // console.log(data);
                this.addRevenue();
                // this.router.navigate(['user/instructions/' + this.qid + "/" + this.title])
                // localStorage.removeItem("qid");
                // localStorage.removeItem("title")
              });
          }
          // console.log(this.isRegistered);
        });
      }

      else {
        alert("paymeant unsuccessfull")
      }
    });

    return this.isValid;
  }

  // checkoutStatus(){
  //   if (this.isValid) {
  //     alert("payment successfull")
  //   }
  //   else {
  //     alert("payment unsuccessfull")
  //   }
  //}

  addRevenue() {
    this.rev.quiz.id = this.qid;
    this.rev.user.id = this.uId;
    const amount = Number(localStorage.getItem("amount"))
    this.rev.amount = amount;
    this.checkoutService.addRevenue(this.rev).subscribe(
      data => {
        // console.log(this.rev);
        // console.log("Statement added");
        // localStorage.removeItem("amount");
      }
    )
    console.log("user/instructions/" + this.qid + "/" + this.title);
    this.router.navigate(['/user/instructions/' + this.qid + "/" + this.title])
    localStorage.removeItem("qid");
    localStorage.removeItem("title")
  }

}
