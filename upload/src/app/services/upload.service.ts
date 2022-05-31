import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  uploadFile(formData:any){
    let urlApi = 'http://127.0.0.1:3000/api/subir';
    return this.http.post(urlApi, formData);
  }

}
