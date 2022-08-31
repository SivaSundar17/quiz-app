import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.css']
})
export class AddQuizzComponent implements OnInit {

  testData = {
    title: '',
    description: '',
    maxMarks: '',
    noOfQuestions: '',
    price: ''
  };

  constructor(
    private _snack: MatSnackBar,
    private quizService: QuizService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  addTest() {
    if (this.testData.title.trim() == '' || this.testData.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }

    //validation...

    //call server
    this.quizService.addTest(this.testData).subscribe(
      (data) => {
        //Swal.fire('Success', 'quiz is added', 'success');
        this.testData = {
          title: '',
          description: '',
          maxMarks: '',
          noOfQuestions: '',
          price: ''
        };
      },

      (error) => {
        //Swal.fire('Error!! ', 'Error while adding quiz', 'error');
        console.log(error);
      }
    );
    alert("quiz added successfully");
    this.router.navigate(['admin/viewQuizzes'])
  }

}
