import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseURL = "http://localhost:8080/question"
  constructor(private _http: HttpClient) { }

  public getQuestionsOfQuiz(id: number): Observable<Question[]> {
    console.log("ques service" + id)
    return this._http.get<Question[]>(`${this.baseURL}/quiz/all/${id}`);
  }
  public getQuestionsOfQuizById(id:number):Observable<Question[]> {
   
    return this._http.get<Question[]>(`${this.baseURL}/quiz/${id}`);
  }
  deleteQuestion(id: number): Observable<Object> {
    return this._http.delete(this.baseURL + "/" + id);
  }
}
