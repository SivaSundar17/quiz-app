import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../model/materials';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(baseURL + '/files');
  }

  getMaterialsbyId(fileid: number) {
    return this.http.get(baseURL + '/downloadFile/' + fileid,
      { observe: 'response', responseType: 'blob' })
  }
  getMaterialsDetailsById(fileid: number): Observable<Material> {
    return this.http.get<Material>(baseURL + '/downloadFile/' + fileid)
}

  deleteMaterialbyId(fileid: number) {
    return this.http.delete(baseURL + '/delete/' + fileid,
      { observe: 'response', responseType: 'blob' })
  }

  updateMaterialbyId(fileid: number): Observable<any> {
    return this.http.put(baseURL + "/update/" + fileid,
      { observe: 'response', responseType: 'blob' })
  }

  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>("http://localhost:8080/uploadFile", formData, {
      reportProgress: true,
      observe: 'events'
    });

  }
  updateFiledesc(fileid: number,formData: FormData):Observable<HttpEvent<string[]>> {
    return this.http.put<string[]>("http://localhost:8080/updateDesc/" + fileid, formData, {
      reportProgress: true,
      observe: 'events'
    });     
  }

  update(formData: FormData, fileid: number): Observable<HttpEvent<string[]>> {
    return this.http.put<string[]>("http://localhost:8080/update/" + fileid, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getId(fileid: number) {
    return fileid;
  }

}
