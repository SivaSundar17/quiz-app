import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  //public Editor = ClassicEditor;
  qId!: number;
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
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) {}

  ngOnInit(): void {
    //this.qId = this._route.snapshot.params['id'];
    //console.log(this.qId);
    // this.qTitle = this._route.snapshot.params['title'];
    // this.question.quiz.id= this.qId;
    this.question.quiz.id =this._route.snapshot.params['id'] ;
    this.qTitle=this._route.snapshot.params['title'] ;
    //this.qTitle = "titleOne";
  
   // this.question.quiz.id= Number(this.qId);

    // this.qId = this._route.snapshot.params.qid;
    // this.qTitle = this._route.snapshot.params.title;
    // this.question.quiz['qId'] = this.qId;
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

    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        alert("Question Added succesfully.You can add another one or go back")
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      }
    );
  }
}
