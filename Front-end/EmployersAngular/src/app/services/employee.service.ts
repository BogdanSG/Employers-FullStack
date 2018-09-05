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
      return [];

    }//catch

  }//getTreeEmployee

}//EmployeeService
