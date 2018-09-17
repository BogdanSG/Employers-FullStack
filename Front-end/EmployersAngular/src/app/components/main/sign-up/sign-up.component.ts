import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {RegexHelperService} from '../../../services/regex-helper.service';
import {Location} from '@angular/common';
import {MainMarginService} from '../../../services/main-margin.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Login: string;
  Password: string;
  ConfirmPassword: string;
  ErrorPassword: string;
  ErrorUsername: string;

  constructor(private AuthenticationService: AuthenticationService, private Location: Location, private RegexHelperService: RegexHelperService, private MainMarginService : MainMarginService) {

    let user = this.AuthenticationService.isAuthorized();

    this.MainMarginService.SetCenterMargin();

    if(user){

      this.Location.back();

    }//if

  }//constructor

  ngOnInit() {

  }//ngOnInit

  async onSignUp(){

    this.ErrorUsername = null;
    this.ErrorPassword = null;

    if(!this.Login || !this.Password || !this.ConfirmPassword){

      return;

    }//if

    if(this.Password === this.ConfirmPassword){

      if(!this.RegexHelperService.IsMatch(this.Login, this.RegexHelperService.UserName)){

        this.ErrorUsername = 'Invalid UserName';

        return;

      }//if
      else if(!this.RegexHelperService.IsMatch(this.Password, this.RegexHelperService.UserPassword)){

        this.ErrorPassword = 'Invalid Password';

        return;

      }//else if

      let data: any = await this.AuthenticationService.signUp({
        username: this.Login,
        password: this.Password
      });

      if(data){

        if(data.error){

          this.ErrorUsername = data.error;

        }//if
        else {

          this.Location.back();

        }//else

      }//if

    }//if
    else {

      this.ErrorPassword = 'Passwords must match'

    }//else

  }//onSignUp

}//SignUpComponent
