import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  users = {};
  money:number = 0;
  options = [{ name: "farm", gold: [2, 5] },
  { name: "cave", gold: [5, 10] },
  { name: "house", gold: [7, 15] },
  { name: "casino", gold: [-100, 100] }];
  log = [];
  user = "";

  constructor(private _http: HttpService) { }
  ngOnInit() {
    this._http.getUsers().subscribe(data => this.users = data);
    var userPrompt = prompt();
    this.user = userPrompt;
    this.getMoney(this.user);

  }
  pickSelection(choice: any) {
    if (choice.gold[0] < 0) {
      let negativemath = Math.floor(Math.random() * -100);
      let positivemath = Math.floor(Math.random() * 100);
      let number = negativemath + positivemath;
      this.money += number;
      this.logAdv(choice, number);
    }
    else {
      let number = Math.floor(Math.random() * (choice.gold[1] - choice.gold[0] + 1) + choice.gold[0]);
      this.money += number;
      this.logAdv(choice, number);
    }
  }
  logAdv(choice, money) {
    if (this.log.length > 8) {
      this.log = [];
    }
    if (money < 0) {
      money *= -1;
      this.log.push("You lost " + money + " gold at the " + choice.name);
    }
    else {
      this.log.push("You earned " + money + " gold at the " + choice.name);
    }
  }
  save() {
    this._http.saveUser(this.user, this.money);
  }
  getMoney(name){
    let usertemp = this._http.getUser(name);
    usertemp.subscribe(data => {
    if (data["data"].length > 0) {
      this.money = data["data"][0].points; 
      //this.money = ;
      //console.log(parseInt(data["data"].points));
    }
    else {
      this.money = 0;
    }
  })
  }
}
