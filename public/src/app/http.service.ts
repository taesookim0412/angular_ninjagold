import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  money = 0;
  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get("/users");
  }
}
