import { Injectable } from '@angular/core';

import {HttpClient, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) {

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

  async getFullEmployee(employeeID, url = 'http://localhost:3000/api/full-employee'){

    try{

      let result = await this.http.post(url, {id : employeeID}).toPromise();

      return result

    }//try
    catch(ex){

      console.log("Exception: getFullEmployee" , ex);
      return null;

    }//catch

  }//getFullEmployee

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

  async getEmployeeList(data, token, url = `http://localhost:3000/api/employee-list?access_token=${token}`) {

    try {

      data.access_token = token;

      let result = await this.http.post(url, data).toPromise();

      return result

    }//try
    catch (ex) {

      console.log("Exception: getEmployeeList", ex);
      return null;

    }//catch

  }//getEmployeeList

  async employeeDelete(employeeID, token, url = `http://localhost:3000/api/employee-delete?access_token=${token}`) {

    try {

      let result = await this.http.post(url, {id: employeeID, access_token: token}).toPromise();

      return result

    }//try
    catch (ex) {

      console.log("Exception: employeeDelete", ex);
      return null;

    }//catch

  }//employeeDelete

  async employeeUpdate(data, token, url = `http://localhost:3000/api/employee-update?access_token=${token}`) {

    try {

      let result = await this.http.post(url, data).toPromise();
      return result

    }//try
    catch (ex) {

      console.log("Exception: employeeUpdate", ex);
      return null;

    }//catch

  }//employeeUpdate

}//EmployeeService
