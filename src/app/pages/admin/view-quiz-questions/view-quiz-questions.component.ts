import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId!:number;
  qTitle!:string;
  question!:Question[];
  index=0
  //quiz!: Quiz[];

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['id'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        console.log("getQuestionOfQuiz"+data);
        this.question = data;
      },
      
    );
  }
  deleteQuestion(id:number)
    {
       this._question.deleteQuestion(id).subscribe((data)=>{
        alert("deleted successfully")
        location.reload();  
        // this.ngOnInit();
       })
    }

}
