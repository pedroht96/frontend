import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../resources/models/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin;
  constructor() { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin ();
  }

}
