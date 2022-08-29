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
  noOfQues = 0;
  maximumMarks=0;
  str!:string|null;
  correctAnswers = 0;
  uId!: number
  attempted = 0;
  userId!:number
  isSubmit = false;
  status = {} as QuizPaymentStatus;
  total!:number;
  testscore = {
    quizTitle:"",
    marksGot:0,
    maxMarks:0,
    noOfQuestions:0,
    noOfQuestionsAttept:0,
    user: {
      id: 0
    },
    quiz: {
      id: 0
    }
  }
  constructor(private quizService: QuizService,
    private route: ActivatedRoute,
    private _question: QuestionService, private router: Router,
    private _quiz:QuizService) { }

  ngOnInit(): void {
    this.uId = Number(localStorage.getItem('id'))
    this.id = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title']
    console.log(this.id)
    this.loadQuestions();
    this.str=localStorage.getItem('id');
    this.userId=Number(this.str);

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
      //noofquestions
      this.noOfQues=this.questions.length;
      console.log(this.noOfQues)
      //mxmarks
    this.maximumMarks=this.questions[0].quiz.maxMarks;
     console.log(this.maximumMarks)
     //title
    this.title=this.questions[0].quiz.title
    console.log(this.title)
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
    this.addTestScore(this.id,this.marksGot,this.noOfQues,this.attempted,this.maximumMarks,this.title,this.userId);
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
  addTestScore(id:number,marksGot: number,noOfQues:number,attempted:number,maximumMarks:number,title:string,userId:number)
  {
    this.testscore.quiz.id=id;
    this.testscore.user.id=userId;
    this.testscore.quizTitle=title;
    this.testscore.marksGot=marksGot;
    this.testscore.noOfQuestions=noOfQues;
    this.testscore.noOfQuestionsAttept=attempted;
    this.testscore.maxMarks=maximumMarks;
    this._quiz.addHistory(this.testscore).subscribe(data=>{

    })
  }
}
