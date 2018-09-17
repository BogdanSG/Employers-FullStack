import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import { Location } from '@angular/common';
import {MainMarginService} from '../../../services/main-margin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  Login: string;
  Password: string;
  Error: string;

  constructor(private AuthenticationService : AuthenticationService, private Location: Location, private MainMarginService : MainMarginService) {

    let user = this.AuthenticationService.isAuthorized();

    this.MainMarginService.SetCenterMargin();

    if(user){

      this.Location.back();

    }//if

  }//constructor

  ngOnInit() {

  }//ngOnInit

  async onSingInCkick(){

    if(!this.Login || !this.Password){

      return;

    }//if

    let data: any = await this.AuthenticationService.signIn({
      username: this.Login,
      password: this.Password
    });

    if(data){

      if(data.error){

        this.Error = data.error;

      }//if
      else {

        this.Location.back();

      }//else

    }//if

  }//onSingInCkick

}//SignInComponent
