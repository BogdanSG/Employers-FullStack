import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthorized: boolean;
  UserName: string;

  constructor(private AuthenticationService : AuthenticationService, private Router: Router) {

    if(localStorage.getItem('currentUser')){

      let data: any = JSON.parse(localStorage.getItem('currentUser'));

      this.UserName = data.user;
      this.isAuthorized = true;

    }//if
    else {

      this.UserName = '';
      this.isAuthorized = false;

    }//else

    this.AuthenticationService.onLogOut(function () {

      this.UserName = '';
      this.isAuthorized = false;

    }.bind(this));

    this.AuthenticationService.onSignIn(function (UserName) {

      this.UserName = UserName;
      this.isAuthorized = true;

    }.bind(this));

  }//constructor

  onLogOut(){

    this.AuthenticationService.logOut();

  }//onLogOut

  ngOnInit() {

  }//OnInit

}//HeaderComponent
