import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { ViewQuizQuestionsComponent } from '../view-quiz-questions/view-quiz-questions.component';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  //questionid!:number
  quesId!: number;
  qTitle!:string;
  question = {
    quiz: {
      id:0
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };

  constructor(
    private updateQuestionService:QuestionService,
    private _route: ActivatedRoute,
    private _question: QuestionService  ) {}

  ngOnInit(): void {
    this.quesId = this._route.snapshot.params['id'];
    this.getQuestionById(this.quesId);
  }

  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }

    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }

    // this.questionid=this.updateQuestionService.getId(this.questionid);
    //form submit
    this._question.updateQuestion(this.question,this.quesId).subscribe(
      (data: any) => {
        alert('Question added successfully.',);
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      }
    );
  }
  getQuestionById(quesId:number){
    this._question.getQuestionById(quesId).subscribe(val=>{
      this.question=val;
      //console.log(this.question)
    })

    // this.quizservice.getQuiz(id).subscribe(val => {
    //   this.quiz = val;
    //   console.log(val);
    // })
  }


}
