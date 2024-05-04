import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/model/materials';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-view-materials',
  templateUrl: './view-materials.component.html',
  styleUrls: ['./view-materials.component.css']
})
export class ViewMaterialsComponent implements OnInit {
  public data: Array<Material> = [];
  desc!: string
  qId!: number;
  title!: string;

  constructor(private materialService: MaterialService, private _route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['id'];
    this.title = this._route.snapshot.params['title']
    this.getQuizMaterials();
  }

  getQuizMaterials() {
    this.materialService.getMaterialsByQuizId(this.qId).subscribe(val => {
      this.data = val;
      val.forEach(element => {
        element.fileName = element.fileName.split('.pdf').join("");
      });
    })

  }
  //download file
  clickedfun(id: number, name: string): void {
    console.log(id);
    this.materialService.getMaterialsbyId(id).subscribe(response => {

      let blob: Blob = response.body as Blob;

      let a = document.createElement('a');
      a.download = name;

      a.href = window.URL.createObjectURL(blob);
      a.click();
      //this.router.navigate(['admin']);
      //navigate to localhost:4200/updateMaterial/{id}
    })
  }

}
