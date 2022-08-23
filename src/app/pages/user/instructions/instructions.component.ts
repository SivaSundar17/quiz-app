import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz';
import { QuizPaymentStatus } from 'src/app/model/quizPaymentStatus';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  id!: number
  quiz = {} as Quiz;
  isRegistered!: boolean|null;
  uId!: number | null;
  status={} as QuizPaymentStatus;
  constructor(private quizservice: QuizService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const str = localStorage.getItem('id');
    this.uId = Number(str);
    this.id = this.route.snapshot.params['id'];
    this.quizservice.getQuiz(this.id).subscribe(data => {
      this.quiz = data
      // console.log(this.quiz);  
    })

    this.quizservice.registeredStatus(this.uId, this.id).subscribe(data => {
      this.status=data;
      //console.log(data);
      if(data==null){
        this.isRegistered=false;
      }
      else{
      this.isRegistered=data.paymentStatus;
      }
      // console.log(this.isRegistered);

    });
  }

  onClickRegister(){
    this.router.navigate(['checkout'])
    localStorage.setItem('qid', String(this.id));

  }
  startQuiz(){
    this.router.navigate(['/start/',this.quiz.id]);
  }

}
