import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/model/materials';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-update',
  templateUrl: './material-update.component.html',
  styleUrls: ['./material-update.component.css']
})
export class MaterialUpdateComponent implements OnInit {
  filenames: string[] = [];
  submitted = false;
  files!: FileList;
  desc!: string;
  fileid!: number;
  fileName!:string;
  public data:Array<Material> = [];

  constructor(private materialService: MaterialService,
    private _route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.fileid = this._route.snapshot.params['id'];

    this.materialService.getMaterials().subscribe(
      (data: any) => {
        this.data=data;
        //console.log(this.data.fileName);
        this.data.forEach(element => {
          if(element.id==this.fileid){
            this.fileName=element.fileName;
            this.desc=element.description;
          }
        });
      },
    );
    //console.log("materialUpdateComp"+this.fileid);
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
    //console.log(target.files)
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
    console.log(this.desc);
    const fileName = this.files[0].name;
    const formData = new FormData();
    this.fileid = this.materialService.getId(this.fileid);
    for (var i = 0; i < this.files.length; i++) {
      formData.append('file', this.files[i], this.files[i].name);
      formData.append('desc', this.desc);
    }

    this.materialService.update(formData, this.fileid).subscribe(event => {
      console.log(event);
      //this.resportProgress(event);
    }
    );


  }
  onSubmitDesc(){
    console.log(this.desc)
    const formData=new FormData
    formData.append('desc', this.desc);
    this.materialService.updateFiledesc(this.fileid,formData).subscribe(ele=>{
      console.log(ele);
    });

    alert("Description has been updated .")
    this.router.navigate(['admin/viewQuizzes'])
  }

  // private resportProgress(event: HttpEvent<string[] | Blob>){
  //   throw new Error('Method not implemented.');

  // }


}
