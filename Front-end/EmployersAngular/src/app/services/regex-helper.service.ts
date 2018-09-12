import { Injectable } from '@angular/core';
import {st} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class RegexHelperService {

  readonly UserName : RegExp = /^[a-z0-9_]{4,20}$/gmi;
  readonly UserPassword : RegExp = /^[a-z0-9]{4,20}$/gmi;
  readonly EmployeeName : RegExp = /^\w[^0-9)([\]<>\\/.{},'":;`$~#@!%^&*+=|?_-]{1,255}$/gmi;

  constructor() {

  }//constructor

  IsMatch(value : string, pattern : RegExp){

    let result = value.search(pattern);

    return result !== -1 ? true : false;

  }//IsMatch

}//RegexHelperService
