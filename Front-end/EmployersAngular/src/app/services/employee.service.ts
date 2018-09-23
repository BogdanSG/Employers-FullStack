import { Injectable } from '@angular/core';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient, private AuthenticationService : AuthenticationService) {

  }//constructor

  async getTreeEmployee(employeeID, url = 'http://localhost:3000/api/tree-employee'){

    try{

      let result = await this.http.post(url, {id : employeeID}).toPromise();

      return result

    }//try
    catch(ex){

      console.log("Exception: getTreeEmployee" , ex);
      return null;

    }//catch

  }//getTreeEmployee

  async getFullEmployee(employeeID, token, url = `http://localhost:3000/api/full-employee?token=${token}`){

    try{

      let result = await this.http.post(url, {id : employeeID, token: token}).toPromise();

      return result

    }//try
    catch(ex){

      if(ex.status === 401){

        this.AuthenticationService.logOut();

      }//if
      else {

        console.log("Exception: getFullEmployee" , ex);

      }//else

      return null;

    }//catch

  }//getFullEmployee

  async getShortEmployee(employeeID, url = 'http://localhost:3000/api/short-employee'){

    try{

      let result = await this.http.post(url, {id : employeeID}).toPromise();

      return result

    }//try
    catch(ex){

      console.log("Exception: getShortEmployee" , ex);
      return null;

    }//catch

  }//getShortEmployee

  async getAllPositions(url = 'http://localhost:3000/api/positions'){

    try{

      let result = await this.http.post(url, null).toPromise();

      return result

    }//try
    catch(ex){

      console.log("Exception: getAllPositions" , ex);
      return null;

    }//catch

  }//getAllPositions

  async getEmployeeList(data, token, url = `http://localhost:3000/api/employee-list?token=${token}`) {

    try {

      data.token = token;

      let result = await this.http.post(url, data).toPromise();

      return result

    }//try
    catch (ex) {

      if(ex.status === 401){

        this.AuthenticationService.logOut();

      }//if
      else {

        console.log("Exception: getEmployeeList" , ex);

      }//else

      return null;

    }//catch

  }//getEmployeeList

  async employeeDelete(employeeID, token, url = `http://localhost:3000/api/employee-delete?token=${token}`) {

    try {

      let result = await this.http.post(url, {id: employeeID, token: token}).toPromise();

      return result

    }//try
    catch (ex) {

      if(ex.status === 401){

        this.AuthenticationService.logOut();

      }//if
      else {

        console.log("Exception: employeeDelete" , ex);

      }//else

      return null;

    }//catch

  }//employeeDelete

  async employeeUpdate(data, token, url = `http://localhost:3000/api/employee-update?token=${token}`) {

    try {

      let result = await this.http.post(url, data).toPromise();
      return result

    }//try
    catch (ex) {

      if(ex.status === 401){

        this.AuthenticationService.logOut();

      }//if
      else {

        console.log("Exception: employeeUpdate" , ex);

      }//else

      return null;

    }//catch

  }//employeeUpdate

}//EmployeeService
