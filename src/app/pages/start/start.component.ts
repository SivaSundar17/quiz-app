import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question';
import { Quiz } from 'src/app/model/quiz';
import { QuizPaymentStatus } from 'src/app/model/quizPaymentStatus';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  id!: number
  questions!: Question[]
  quiz!: Quiz[];
  title!: string;
  marksGot = 0;
  correctAnswers = 0;
  uId!: number
  attempted = 0;
  isSubmit = false;
  status = {} as QuizPaymentStatus;
  total!:number;

  constructor(private quizService: QuizService,
    private route: ActivatedRoute,
    private _question: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.uId = Number(localStorage.getItem('id'))
    this.id = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title']
    console.log(this.id)
    this.loadQuestions();

  }

  loadQuestions() {
    this._question.getQuestionsOfQuiz(this.id).subscribe((data) => {
      this.questions = data;
      console.log(data)
    })
  }

  submitQuiz() {
    this.evalQuiz()
  }
  evalQuiz() {
    this.isSubmit = true
    this.questions.forEach((q) => {
      if (q.givenAnswer == q.answer) {

        this.correctAnswers++;
        let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
        this.marksGot += marksSingle;
        this.total=this.questions.length*marksSingle;
      }
      if (q.givenAnswer.trim() != '') {
        this.attempted++;
      }

    })
    console.log(this.correctAnswers)
    console.log(this.marksGot)
    console.log("attempted" + this.attempted);
    this.changeRegistrationStatus();

  }

  changeRegistrationStatus() {
    //get status
    this.quizService.registeredStatus(this.uId, this.id).subscribe(data => {
      this.status = data;
      this.status.paymentStatus = false;
      //update status
      this.quizService.updateRegistrationStatus(this.status.id, this.status).subscribe(
        data => {
          //this.gotoprofile();
          //console.log(data);
        });
    });

  }
}
