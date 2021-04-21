import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  form: FormGroup;
 
  constructor(private uploadService: UploadService){}

  ngOnInit() {
   this.form = new FormGroup({
     nomeAutor: new FormControl(null,{
        updateOn: 'change',
       validators: [Validators.required]
      }),
     nomeArtigo: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),
      abnt : new FormControl(false,{
        updateOn:'change',
        validators:[Validators.required]
      }),
      plagio: new FormControl(false,{
        updateOn:'change',
        validators:[Validators.required]
      }),
    })
  
  }
  onEnviarArtigo(){
    if(!this.form.valid){
      return;
    }
    this.uploadService.addArtigo(
      this.form.value.nomeArtigo,
      this.form.value.nomeAutor,
      this.form.value.abnt,
      this.form.value.plagio
      )
      console.log(this.form)
  }

}
