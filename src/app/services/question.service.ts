import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { ViewQuizQuestionsComponent } from '../pages/admin/view-quiz-questions/view-quiz-questions.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseURL = "http://localhost:8080/question"
  constructor(private _http: HttpClient) { }

  //add question
  public addQuestion(question: { quiz: { id: number; }; content: string; option1: string; option2: string; option3: string; option4: string; answer: string; }){
    return this._http.post(`${this.baseURL}/`, question);
  }

  public updateQuestion(question: {
    quiz: { id: number; }; content: string; option1: string; option2: string; option3: string; // }
    option4: string;
    answer: string;
  },questionid:number) {
  return this._http.put("http://localhost:8080/question/update/"+questionid, question);}

  getId(questionid:number){
    return questionid;
  }

  public getQuestionsOfQuiz(id: number): Observable<Question[]> {
    console.log("ques service" + id)
    return this._http.get<Question[]>(`${this.baseURL}/quiz/all/${id}`);
  }

  deleteQuestion(id: number): Observable<Object> {
    return this._http.delete(this.baseURL + "/" + id);
  }
  getQuestionById(quesId:number):Observable<Question>{
    return this._http.get<Question>(this.baseURL+"/"+quesId)
  }
}
