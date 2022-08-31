import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  p:number=1
  id!: number
  quiz!: Quiz[];
  search:any;
  
  constructor(private quizservice: QuizService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.quizservice.getQuizzes().subscribe(data => {
      this.quiz = data
      // console.log(this.quiz);  
    })

  }

  onStartClick(id: number,title:string) {
    this.router.navigate(['user/instructions/' + id+"/"+title])
  }
  onMaterialsClick(id:number,title:string){
    this.router.navigate(['/user/materials',id,title])
  }

}
