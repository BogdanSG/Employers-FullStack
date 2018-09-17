import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainMarginService {

  constructor() {

  }//constructor

  SetZeroMargin(){

    let main : any = document.querySelector('#main');

    if(main){

      main.style.margin = '0';

    }//if

  }//SetZeroMargin

  SetCenterMargin(){

    let main : any = document.querySelector('#main');

    if(main){

      main.style.margin = '0 auto';

    }//if

  }//SetCenterMargin

}//MainMarginService
