import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {AuthenticationService} from '../../../services/authentication.service';
import {IAuthorize} from '../../../interfaces/iauthorize';
import {ListComponent} from '../list/list.component';
import {RegexHelperService} from '../../../services/regex-helper.service';

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
  SuccessMessage: string;
  ErrorMessage: string;
  OldEmployee;

  ChifIDError: boolean;
  FirstNameError: boolean;
  LastNameError: boolean;
  SurNameError: boolean;

  readonly MaxSalaryValue : number = 1000000000;
  readonly MinSalaryValue : number = 1000;

  constructor(private ActivatedRoute: ActivatedRoute, private EmployeeService: EmployeeService, private AuthenticationService: AuthenticationService, private Router: Router, private RegexHelperService : RegexHelperService) {

    this.OldEmployee = {};

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

    this.ErrorMessage = null;
    this.FirstNameError = false;
    this.LastNameError = false;
    this.SurNameError = false;

    if(this.Employee){

      if(this.Edit){

        this.Employee = Object.assign({}, this.OldEmployee);

        if(this.ChifIDError || !this.OldEmployee.Chief.EmployeeID){

          this.clearChief();
          this.ChifIDError = false;

        }//if

      }//if
      else {

        this.OldEmployee = Object.assign({}, this.Employee);
        this.OldEmployee.Chief = Object.assign({}, this.Employee.Chief);

      }//else

      this.Edit = !this.Edit;

    }//if

  }//onEdit

  async onDelete(){

    if(this.isAuthorized){

      let result = confirm('Are you sure you want to delete an employee?');

      if(result){

        let data: any = await this.EmployeeService.employeeDelete(this.EmployeeID, this.AuthenticationService.GetToken());

        if(data.code === 200){

          this.SuccessMessage = data.message;

          let seconds = 5;

          this.SuccessMessage += `, Redirect to home page: ${seconds}`;

          let interval = setInterval(() => {

            seconds--;

            if(seconds <= 0){

              clearInterval(interval);

              this.Router.navigateByUrl('/home');

            }//if
            else {

              this.SuccessMessage = this.SuccessMessage.slice(0, this.SuccessMessage.length - 1);

              this.SuccessMessage += `${seconds}`;

            }//else

          }, 1000);

        }//if
        else {

          this.ErrorMessage = data.message;

        }//else

      }//if

    }//if

  }//onDelete

  async onUpdateClick(){

    this.ErrorMessage = null;
    this.FirstNameError = false;
    this.LastNameError = false;
    this.SurNameError = false;

    if(this.isAuthorized){

      let result = confirm('Are you sure you want to update an employee?');

      if(result){

        if(this.Employee && this.Employee.Chief){

          if(this.ChifIDError){

            this.ErrorMessage = 'Incorrect Chief';

            return;

          }//if

          if(!this.RegexHelperService.IsMatch(this.Employee.FirstName, this.RegexHelperService.EmployeeName)){

            this.ErrorMessage = 'Incorrect FirstName';
            this.FirstNameError = true;

            return;

          }//if

          if(!this.RegexHelperService.IsMatch(this.Employee.LastName, this.RegexHelperService.EmployeeName)){

            this.ErrorMessage = 'Incorrect LastName';
            this.LastNameError = true;

            return;

          }//if

          if(this.Employee.SurName && this.Employee.SurName.length > 0){

            if(!this.RegexHelperService.IsMatch(this.Employee.SurName, this.RegexHelperService.EmployeeName)){

              this.ErrorMessage = 'Incorrect SurName';
              this.SurNameError = true;

              return;

            }//if

          }//if

          let FileImput : any = document.querySelector('#employeeImage');

          if(FileImput){

            let formData = new FormData();

            formData.append('image', FileImput.files[0]);
            formData.append('EmployeeID', `${this.EmployeeID}`);
            formData.append('FirstName', this.Employee.FirstName);
            formData.append('LastName', this.Employee.LastName);
            formData.append('SurName', this.Employee.SurName !== '' ? this.Employee.SurName : null);
            formData.append('ChiefID', this.Employee.ChiefID);
            formData.append('EmploymentDate', this.Employee.EmploymentDate);
            formData.append('Salary', this.Employee.Salary);

            let data : any = await this.EmployeeService.employeeUpdate(formData, this.AuthenticationService.GetToken());

            if(data.code === 200){

              this.SuccessMessage = data.message;

              console.log(data.data);

            }//if
            else {

              this.ErrorMessage = data.message;

            }//else

          }//if

        }//if

      }//if

    }//if

  }//onUpdateClick

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

          this.Positions = data.data;

        }//if

      }//if
      else {

        this.ErrorMessage = data.message;

      }//else

    }//if

  }//ngOnInit

  getPosition(PositionID){

    if(this.Positions && PositionID){

      let Position = this.Positions.find(p => p.PositionID === PositionID);

      if(Position){

        return Position;

      }//if
      else{

        return null;

      }//else

    }//if
    else {

      return null;

    }//else

  }//getPosition

  async onChiefChange(){

    let ChiefID = this.Employee.Chief.EmployeeID;

    if(ChiefID){

      if(ChiefID < 0){

        this.Employee.Chief.EmployeeID = null;

      }//if
      else {

        let data: any = await this.EmployeeService.getFullEmployee(ChiefID);

        if(data.code === 200){

          this.ChifIDError = false;
          this.ErrorMessage = null;

          let Chief = data.data[0];

          this.Employee.Chief.FirstName = Chief.FirstName;
          this.Employee.Chief.LastName = Chief.LastName;
          this.Employee.Chief.SurName = Chief.SurName;

          if(Chief.PositionID === 5){

            this.Employee.PositionID = -1;
            this.ErrorMessage = 'Worker can not be Chief';
            this.ChifIDError = true;

          }//if
          else {

            this.Employee.PositionID = Chief.PositionID + 1;

          }//else

        }//if
        else {

          this.ErrorMessage = data.message;
          this.Employee.PositionID = -1;
          this.ChifIDError = true;

        }//else

      }//else

    }//if
    else {

      this.Employee.PositionID = 1;

      this.clearChief();

    }//esle

  }//onChiefChange

  async onSalaryChange(event){

    if(event.srcElement.value > this.MaxSalaryValue){

      event.srcElement.value = this.MaxSalaryValue;

    }//if
    else if(event.srcElement.value < this.MinSalaryValue){

      event.srcElement.value = this.MinSalaryValue;

    }//else if

  }//onChiefChange

  clearChief(){

    if(this.Employee && this.Employee.Chief){

      this.Employee.Chief.EmployeeID = null;
      this.Employee.Chief.FirstName = '';
      this.Employee.Chief.LastName = '';
      this.Employee.Chief.SurName = '';

    }//if

  }//if

}//SingleEmployeeComponent
