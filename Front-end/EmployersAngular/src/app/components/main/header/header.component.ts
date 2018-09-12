import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {IAuthorize} from '../../../interfaces/iauthorize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, IAuthorize {

  isAuthorized: boolean;
  UserName: string;

  constructor(private AuthenticationService : AuthenticationService) {

    let user = this.AuthenticationService.isAuthorized();

    if(user){

      this.UserName = user;
      this.isAuthorized = true;

    }//if
    else {

      this.UserName = '';
      this.isAuthorized = false;

    }//else

    this.AuthenticationService.onLogOut('HeaderComponent', this.onLogOut.bind(this));

    this.AuthenticationService.onSignIn('HeaderComponent', this.onSignIn.bind(this));

  }//constructor

  onSignIn(UserName : string){

    this.UserName = UserName;
    this.isAuthorized = true;

  }//onSignIn

  onLogOut(){

    this.UserName = '';
    this.isAuthorized = false;

  }//onLogOut

  onLogOutClick(){

    this.AuthenticationService.logOut();

  }//onLogOut

  ngOnInit() {

  }//OnInit

}//HeaderComponent
