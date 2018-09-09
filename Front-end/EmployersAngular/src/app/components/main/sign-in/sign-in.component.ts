import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  Login: string;
  Password: string;

  constructor(private AuthenticationService : AuthenticationService, private Router : Router) {

    if(localStorage.getItem('currentUser')){

      this.Router.navigateByUrl('/home');

    }//if

  }//constructor

  ngOnInit() {

  }//ngOnInit

  async onSingInCkick(){

    let data: any = await this.AuthenticationService.signIn({
      username: this.Login,
      password: this.Password
    });

    if(data){

      if(data.error){

        console.log(data.error);

      }//if
      else {

        this.Router.navigateByUrl('');

      }//else

    }//if

  }//onSingInCkick

}//SignInComponent
