import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get("/users");
  }
  saveUser(name, points) {
    let usertemp = this._http.get("/users/" + name);
    usertemp.subscribe(data => {
      if (data["data"].length == 0) {
        console.log(name, points);
        let thisPost = this._http.post("/users", { name: name, points: points });
        thisPost.subscribe();
      }
      else {
        let thisPut = this._http.put('/users/' + name, { name: name, points: points });
        thisPut.subscribe();
      }
    });
  }
  getUser(name) {
    return this._http.get("/users/" + name);
}
}
