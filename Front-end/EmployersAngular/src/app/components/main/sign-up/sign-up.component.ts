import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Login: string;
  Password: string;
  ConfirmPassword: string;

  constructor(private AuthenticationService: AuthenticationService, private Router: Router) { }

  ngOnInit() {

  }//ngOnInit

  async onSignUp(){

    if(this.Password === this.ConfirmPassword){

      let data: any = await this.AuthenticationService.signUp({
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

    }//if

  }//onSignUp

}//SignUpComponent
