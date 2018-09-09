import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private onlogOutCallBacks : Array<Function>;

  private onSignInCallBacks : Array<Function>;

  constructor(private http : HttpClient) {

    this.onlogOutCallBacks = [];
    this.onSignInCallBacks = [];

  }//constructor

  async signIn(user, url = 'http://localhost:3000/api/sign-in'){

    try{

      let result: any = await this.http.post(url, {username : user.username, password: user.password}).toPromise();

      return this.SignIn(result);

    }//try
    catch(ex){

      console.log("Exception: signIn" , ex);
      return null;

    }//catch

  }//signIn

  async signUp(user, url = 'http://localhost:3000/api/sign-up'){

    try{

      let result: any = await this.http.post(url, {username : user.username, password: user.password}).toPromise();

      return this.SignIn(result);

    }//try
    catch(ex){

      console.log("Exception: signUp" , ex);
      return null;

    }//catch

  }//signIn

  private SignIn(result){

    if(result.code === 200 && result.data.token){

      localStorage.setItem('currentUser', JSON.stringify(result.data));

      this.onSignInCallBacks.forEach(callback => {

        callback(result.data.user);

      });

      return true;

    }//if
    else {

      return { error : result.message };

    }//else

  }//SignIn

  logOut(){

    localStorage.removeItem('currentUser');

    this.onlogOutCallBacks.forEach(callback => {

      callback();

    });

  }//logout

  onLogOut(callback : Function){

    this.onlogOutCallBacks.push(callback);

  }//onLogOut

  onSignIn(callback : Function){

    this.onSignInCallBacks.push(callback);

  }//onLogOut

}//AuthenticationService
