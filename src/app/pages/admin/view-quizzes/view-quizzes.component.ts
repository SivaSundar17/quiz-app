import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  quiz!: Quiz[];
  location: any;
  search:any;
  constructor(private quizservice: QuizService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getQuiz();
    // reloadComponent() 
    // {
    //   let currentUrl = this.router.url;
    //       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //       this.router.onSameUrlNavigation = 'reload';
    //       this.router.navigate([currentUrl]);
    //   }
  }
  private getQuiz() {
    this.quizservice.getQuizzes().subscribe(data => {
      this.quiz = data;
    })
  }

  updateQuiz(id: number) {

    this.router.navigate(['/admin/updateQuizz', id]);
  }
  deleteQuiz(id: number) {
    this.quizservice.deleteQuiz(id).subscribe((data) => {
      alert("deleted successfully")
      location.reload();
      // this.ngOnInit();
    })
  }

  onQuestionsClick(id: number, title: string) {
    this.router.navigate(['/admin/viewQuestions', id, title]);
  }

  addQuizClick(){
    this.router.navigate(['/admin/addQuiz']);
  }
  onMaterialsClick(id:number,title:string){
    this.router.navigate(['/admin/materials',id,title])
  }

}
