import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurants";
  rootUrl="http://localhost:3000/";

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }

  saveRestro(data){
    //console.log(data);
   return this.http.post(this.url, data);
  }

  deleteRestro(id){
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrentRestro(id){
    return this.http.get(`${this.url}/${id}`)
  }

  updateRestro(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }

  registerUserService(data){
    return this.http.post(this.rootUrl+"user",data)
  }
}
