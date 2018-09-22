import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private onlogOutCallBacks : Map<String, Function>;

  private onSignInCallBacks : Map<String, Function>;

  constructor(private http : HttpClient) {

    this.onlogOutCallBacks = new Map<String, Function>();
    this.onSignInCallBacks = new Map<String, Function>();

  }//constructor

  isAuthorized(){

    if(localStorage.getItem('currentUser') && localStorage.getItem('token')){

      let user: any = JSON.parse(localStorage.getItem('currentUser'));

      return user;

    }//if
    else {

      return null;

    }//else

  }//isAuthorized

  GetToken(){

    if(localStorage.getItem('token')){

      return JSON.parse(localStorage.getItem('token'));

    }//if

    return null;

  }//GetToken

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

      localStorage.setItem('currentUser', JSON.stringify(result.data.user));
      localStorage.setItem('token', JSON.stringify(result.data.token));

      this.onSignInCallBacks.forEach(callbaks => {

        callbaks(result.data.user);

      });

      return true;

    }//if
    else {

      return { error : result.message };

    }//else

  }//SignIn

  logOut(){

    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');

    this.onlogOutCallBacks.forEach(callbaks => {

      callbaks();

    });

  }//logout

  onLogOut(key: string, callback : Function){

    this.onlogOutCallBacks.set(key, callback);

  }//onLogOut

  onSignIn(key: string, callback : Function){

    this.onSignInCallBacks.set(key, callback);

  }//onLogOut

}//AuthenticationService
