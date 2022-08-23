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
  status = {} as QuizPaymentStatus;

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
        //this.quizService.registeredStatus
        this.quizService.registeredStatus(this.uId, this.qid).subscribe(data => {
          this.status = data;
          //console.log(data);
          if (data == null) {
            //this.isRegistered=false;
          }
          else {
            this.status = data;
            this.status.paymentStatus=true;
          }
          // console.log(this.isRegistered);

        });
        this.router.navigate(['user/instructions/' + this.qid])
        localStorage.removeItem("qid");


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

}
