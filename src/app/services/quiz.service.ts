import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../model/quiz';
import { QuizPaymentStatus } from '../model/quizPaymentStatus';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseURL = "http://localhost:8080/quiz"
  constructor(private _http: HttpClient) { }
  price!: Number

  //add quiz

  public addTest(_test: { title: string; description: string; maxMarks: string; noOfQuestions: string; price: string; }) {
    return this._http.post(`${baseURL}/quiz/addQuiz`, _test);
  }

  getQuizzes(): Observable<Quiz[]> {
    return this._http.get<Quiz[]>(`${this.baseURL + "/getQuiz"}`);
  }
  updateQuiz(id: number, quiz: Quiz): Observable<Object> {
    return this._http.put(this.baseURL + "/updateQuiz/" + id, quiz);
  }
  deleteQuiz(id: number): Observable<Object> {
    return this._http.delete(this.baseURL + "/deleteQuiz/" + id);
  }
  // getEventById(id: number): Observable<Quiz>{
  //   return this._http.get<Quiz>(`${this.baseURL}/${id}`);
  // }
  getQuiz(id: number): Observable<any> {
    return this._http.get<Quiz[]>(this.baseURL + "/" + id);
  }
  
  //check if user is registred while loading quiz
  registeredStatus(id: number, qid: number): Observable<any> {
    return this._http.get<QuizPaymentStatus>(baseURL + "/quizPaymentStatus/paymentStatus/" + id + "/" + qid);
  }

  // update registration status
  updateRegistrationStatus(id: number, quizPaymentStatus: QuizPaymentStatus) {
    return this._http.put(baseURL + "/quizPaymentStatus/" + id, quizPaymentStatus);
  }

  //add registration
  addRegistrationStatus(quizPaymentStatus:any){
    return this._http.post(baseURL+"/quizPaymentStatus/",quizPaymentStatus);
  }





}
