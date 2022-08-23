import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quizz',
  templateUrl: './update-quizz.component.html',
  styleUrls: ['./update-quizz.component.css']
})
export class UpdateQuizzComponent implements OnInit {

  id!: number;
  // quiz!:Quiz[];
  quiz = {} as Quiz;
  quizz = {
    test: "kaushik",
    marks: "100"
  }


  constructor(private quizservice: QuizService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.quiz.id = this.route.snapshot.params['id'];
    this.getQuizByid(this.quiz.id);

  }

  onSubmit() {
    this.quizservice.updateQuiz(this.quiz.id, this.quiz).subscribe(
      data => {

        this.gotoquizzes();
      }, error => console.log(error));
    console.log("submited")

  }
  getQuizByid(id: number) {
    this.quizservice.getQuiz(id).subscribe(val => {
      this.quiz = val;
      console.log(val);
    })
    //console.log(this.quizservice.getQuiz());
  }
  gotoquizzes() {
    this.router.navigate(['/admin/viewQuizzes']);
  }

}
