import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-upload',
  templateUrl: './material-upload.component.html',
  styleUrls: ['./material-upload.component.css']
})
export class MaterialUploadComponent implements OnInit {
  filenames: string[] = [];
  submitted = false;
  files!: FileList
  desc!: string;
  qId!:number;

  constructor(private materialService: MaterialService,private router:Router,private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.qId =this._route.snapshot.params['id'] ;
  }



  // onUploadFiles(files: File[]):void{
  //   const formData = new FormData();
  //   for(const file of files){ 
  //     formData.append('files',file,file.name);
  //   }
  //   this.materialService.upload(formData).subscribe(event=> {
  //       console.log(event);
  //       this.resportProgress(event);
  //     }
  //   );
  // }
  onUploadFiles(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.files = target.files as FileList;
    //const fileName = files[0].name;
    console.log(event)
    // console.log(data)
    const formData = new FormData();
    // formData.append('file',data.name);
    // formData.append('desc',"adding desc");
    // var i = 0; i < files.length; i++
    // for(var i = 0; i < files.length; i++){ 
    //   formData.append('file',files[i],files[i].name);
    //   formData.append('desc',"adding desc");
    // }
    // this.materialService.upload(formData).subscribe(event=> {
    //     console.log(event);
    //     //this.resportProgress(event);
    //   }
    // );
  }
  onSubmit() {

    const fileName = this.files[0].name;
    const formData = new FormData();
    for (var i = 0; i < this.files.length; i++) {
      formData.append('file', this.files[i], this.files[i].name);
      formData.append('desc', this.desc);
      formData.append('qid',String(this.qId));
    }
    this.materialService.upload(formData).subscribe(event => {
      console.log(event);
      //this.resportProgress(event);
    }
    );
    alert("material uploaded")
    this.router.navigate(['admin/viewQuizzes']);
  }

  // private resportProgress(event: HttpEvent<string[] | Blob>){
  //   throw new Error('Method not implemented.');

  // }
}
