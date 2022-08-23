import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/model/question';
import { Quiz } from 'src/app/model/quiz';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  id!:number
   questions!:Question[]
   quiz!:Quiz[]
   marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  isSubmit = false;
  timer!:any
  constructor(private locationSt:LocationStrategy,
    private route:ActivatedRoute,
    private _question:QuestionService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.preventBackButton();
    this.loadQuestions();

  }
  
  loadQuestions() {
    this._question.getQuestionsOfQuizById(this.id).subscribe((data)=>{
      this.questions=data;
      console.log(data)
      this.timer = this.questions.length * 2 * 60;
      this.startTimer()
      
    })
  }
  preventBackButton(){
    history.pushState(null, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, location.href);
    });
  }
  startTimer() {
    let t = window.setInterval(() => {
      //code
      if (this.timer <= 0) {
        this.evalQuiz()
        //this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }
  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  submitQuiz(){
    this.evalQuiz()
  }
  evalQuiz(){
    this.isSubmit=true
    this.questions.forEach((q)=>
    {
      if(q.givenAnswer==q.answer){
      
        this.correctAnswers++;
        let marksSingle=this.questions[0].quiz.maxMarks/this.questions.length;
        this.marksGot+=marksSingle
      }
      if(q.givenAnswer.trim()!=''){
        this.attempted++;
      }
      
    })
    console.log(this.correctAnswers)
    console.log(this.marksGot)
    console.log("attempted"+this.attempted);
  }
}
