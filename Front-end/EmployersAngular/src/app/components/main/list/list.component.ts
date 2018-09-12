import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {IAuthorize} from '../../../interfaces/iauthorize';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, IAuthorize {

  isAuthorized: boolean;
  employeeList: Array<any>;

  constructor(private AuthenticationService : AuthenticationService) {

    this.employeeList = [
      {
        "EmployeeID": 11,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Владимир",
        "LastName": "Иванов",
        "SurName": "Константинович",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 469700,
        "ImgName": null
      },
      {
        "EmployeeID": 12,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Николай",
        "LastName": "Фёдоров",
        "SurName": "Дмитриевич",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 238100,
        "ImgName": null
      },
      {
        "EmployeeID": 13,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Юрий",
        "LastName": "Васильев",
        "SurName": "Александрович",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 215000,
        "ImgName": null
      },
      {
        "EmployeeID": 14,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Виктор",
        "LastName": "Иванов",
        "SurName": "Константинович",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 422200,
        "ImgName": null
      },
      {
        "EmployeeID": 15,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Алексей",
        "LastName": "Тарасов",
        "SurName": "Дмитриевич",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 494100,
        "ImgName": null
      },
      {
        "EmployeeID": 16,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Николай",
        "LastName": "Воробьёв",
        "SurName": "Юрьевич",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 304000,
        "ImgName": null
      },
      {
        "EmployeeID": 17,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Александр",
        "LastName": "Лебедев",
        "SurName": "Андреевич",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 487100,
        "ImgName": null
      },
      {
        "EmployeeID": 18,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Николай",
        "LastName": "Соколов",
        "SurName": "Владимирович",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 379100,
        "ImgName": null
      },
      {
        "EmployeeID": 19,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Николай",
        "LastName": "Воробьёв",
        "SurName": "Александрович",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 170300,
        "ImgName": null
      },
      {
        "EmployeeID": 20,
        "ChiefID": null,
        "PositionID": 1,
        "Position": "Director",
        "EmployeeImgID": null,
        "FirstName": "Борис",
        "LastName": "Кузнецов",
        "SurName": "Алексеевич",
        "EmploymentDate": "2018-09-05T08:40:15.000Z",
        "Salary": 157100,
        "ImgName": null
      }
    ];

    let user = this.AuthenticationService.isAuthorized();

    if(user){

      this.isAuthorized = true;

    }//if
    else {

      this.isAuthorized = false;

    }//else

    this.AuthenticationService.onSignIn('ListComponent', this.onSignIn.bind(this));

    this.AuthenticationService.onLogOut('ListComponent', this.onLogOut.bind(this));

  }//constructor

  onSignIn(){

    this.isAuthorized = true;

  }//onSignIn

  onLogOut(){

    this.isAuthorized = false;

  }//onLogOut

  ngOnInit() {

  }//ngOnInit

}//ListComponent
