import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {AuthenticationService} from '../../../services/authentication.service';
import {IAuthorize} from '../../../interfaces/iauthorize';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.css']
})
export class SingleEmployeeComponent implements OnInit, IAuthorize {

  EmployeeID: number;
  Employee: any;
  Positions: Array<any>;
  ImgPath: string;
  isAuthorized: boolean;
  Edit: boolean;

  constructor(private ActivatedRoute: ActivatedRoute, private EmployeeService: EmployeeService, private AuthenticationService: AuthenticationService, private Router: Router) {

    let id = +this.ActivatedRoute.snapshot.params['id'];

    if(id){

      this.EmployeeID = id;

    }//if

    let user = this.AuthenticationService.isAuthorized();

    if(user){

      this.isAuthorized = true;

    }//if
    else {

      this.isAuthorized = false;

    }//else

    this.AuthenticationService.onSignIn('SingleEmployeeComponent', this.onSignIn.bind(this));

    this.AuthenticationService.onLogOut('SingleEmployeeComponent', this.onLogOut.bind(this));

  }//constructor

  onSignIn(){

    this.isAuthorized = true;

  }//onSignIn

  onLogOut(){

    this.isAuthorized = false;
    this.Edit = false;

  }//onLogOut

  onEdit(){

    this.Edit = !this.Edit;

  }//onEdit

  async onDelete(){

    if(this.isAuthorized){

      let data: any = await this.EmployeeService.employeeDelete(this.EmployeeID, this.AuthenticationService.GetToken());

      if(data.code === 200){

        this.Router.navigateByUrl('/home');

      }//if

    }//if

  }//onDelete

  async ngOnInit() {

    if(this.EmployeeID){

      let data: any = await this.EmployeeService.getFullEmployee(this.EmployeeID);

      if(data.code === 200){

        this.Employee = data.data[0];

        this.Employee.EmploymentDate = this.Employee.EmploymentDate.replace('Z', '');

        if(this.Employee.ImgName){

          this.ImgPath = this.Employee.ImgName;

        }//if
        else {

          this.ImgPath = '/assets/public/img/user.png';

        }//else

        if(this.Employee.Chief) {

          this.Employee.Chief = this.Employee.Chief[0];

        }//if
        else {

          this.Employee.Chief = {
            EmployeeID: null,
            FirstName: '',
            LastName: '',
            SurName: ''
          };

        }//else

        data = await this.EmployeeService.getAllPositions();

        if(data.code === 200){

          let Positions = data.data;

          let PositionID = this.Employee.PositionID;

          let sortPositions = [];

          sortPositions.push({
            PositionID: PositionID,
            Position: this.Employee.Position
          });

          Positions.forEach(item => {

            if(item.PositionID !== PositionID){

              sortPositions.push(item);

            }//if

          });

          this.Positions = sortPositions;

        }//if

      }//if
      else {

        this.Router.navigateByUrl('/home');

      }//else

    }//if

  }//ngOnInit

}//SingleEmployeeComponent
