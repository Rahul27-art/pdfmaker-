import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}  

    getuserdata(){
    let apiurl = 'https://gorest.co.in/public/v2/users';
    return this.http.get(apiurl)

    }
}
