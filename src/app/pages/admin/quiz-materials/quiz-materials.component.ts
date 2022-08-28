import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/model/materials';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-quiz-materials',
  templateUrl: './quiz-materials.component.html',
  styleUrls: ['./quiz-materials.component.css']
})
export class QuizMaterialsComponent implements OnInit {
  public data: Array<Material> = [];
  desc!:string
  qId!: number;
  title!:string;
  constructor(private materialService:MaterialService,private _route: ActivatedRoute,private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['id'];
    this.title=this._route.snapshot.params['title']
    this.getQuizMaterials();
  }

  getQuizMaterials(){
    this.materialService.getMaterialsByQuizId(this.qId).subscribe(val => {
      this.data = val;
      val.forEach(element => {
        element.fileName=element.fileName.split('.pdf').join("");
      });
    })
    
  }
//download file
  clickedfun(id:number,name:string):void{
    console.log(id);
    this.materialService.getMaterialsbyId(id).subscribe(response=>{
      let fname=response.headers.get('CONTENT-DISPOSITION')
       ?.split(' ')[1].split('filename=')[1].trim();

      let blob:Blob=response.body as Blob;

      let a=document.createElement('a');
      a.download=name;

      a.href=window.URL.createObjectURL(blob);
      a.click();
      //this.router.navigate(['admin']);
      //navigate to localhost:4200/updateMaterial/{id}
    })
  }
//delete file
  clicked(id:number):void{
    console.log(id);
    this.materialService.deleteMaterialbyId(id).subscribe()
    alert("material deleted")
    window.location.reload();
  }

//updatefile
  clickedfun1(id:number,name:string):void{
    console.log(id);
    this.materialService.updateMaterialbyId(id).subscribe(response=>{
      let fname=response.headers.get('CONTENT-DISPOSITION')
       ?.split(' ')[1].split('filename=')[1].trim();

      let blob:Blob=response.body as Blob;

      let a=document.createElement('a');
      a.download=name;

      a.href=window.URL.createObjectURL(blob);
      a.click();
    })
  }

  onUpdateClick(id:number){
    this.router.navigate(['admin/materialUpdate',id])
  }

  onAddClick(){
    this.router.navigate(['admin/materialUpload',this.qId])

  }

}
