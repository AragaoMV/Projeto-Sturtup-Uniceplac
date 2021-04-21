import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Upload } from './upload.model';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private _artigo = new BehaviorSubject<Upload[]>([
    new Upload(
    'teste',
    'teste',
    true,
    true),

  ]);
 get artigo(){
  return this._artigo.asObservable();
 }
 
  constructor() { }

  addArtigo(nomeArtigo: string,nomeAutor: string,abnt: boolean, plagio: boolean){
    const newArtigo = new Upload(nomeArtigo,nomeAutor, abnt, plagio);
    this.artigo.pipe(take(1)).subscribe(artigo =>{
     this._artigo.next(artigo.concat(newArtigo)); 
    });
    
  }
}
