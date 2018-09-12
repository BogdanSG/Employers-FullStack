export interface IAuthorize {

  isAuthorized : boolean;
  onLogOut();
  onSignIn(UserName : string);

}//IAuthorize
