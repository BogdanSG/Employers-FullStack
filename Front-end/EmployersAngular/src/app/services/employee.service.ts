import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

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

}//EmployeeService
