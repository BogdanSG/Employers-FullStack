import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {IAuthorize} from '../../../interfaces/iauthorize';
import {EmployeeService} from '../../../services/employee.service';
import {PhotoHelperService} from '../../../services/photo-helper.service';
import {Router} from '@angular/router';
import {MainMarginService} from '../../../services/main-margin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, IAuthorize {

  isAuthorized: boolean;
  employeeList: Array<any> = [];
  SearchArray : Array<string> = [
    'EmployeeID',
    'FirstName',
    'LastName',
    'SurName',
    'FullName',
    'Salary',
  ];
  SortArray : Array<string> = [
    'EmployeeID',
    'FirstName',
    'LastName',
    'SurName',
    'Salary',
    'Position',
    'EmploymentDate',
  ];
  Limit : number = 10;
  Offset : number = 0;
  Sort: string = 'ASC';
  OrderBy: string = 'EmployeeID';
  Search: string = 'EmployeeID';
  SearchValue: string;

  constructor(private AuthenticationService : AuthenticationService, private EmployeeService : EmployeeService, private PhotoHelperService : PhotoHelperService, private Router : Router, private MainMarginService : MainMarginService) {

    let user = this.AuthenticationService.isAuthorized();

    if(user){

      this.isAuthorized = true;
      this.MainMarginService.SetZeroMargin();

    }//if
    else {

      this.isAuthorized = false;
      this.MainMarginService.SetCenterMargin();

    }//else

    this.AuthenticationService.onSignIn('ListComponent', this.onSignIn.bind(this));

    this.AuthenticationService.onLogOut('ListComponent', this.onLogOut.bind(this));

  }//constructor

  onTableClick(EmployeeID){

    if(EmployeeID){

      this.Router.navigateByUrl(`/single-employee/${EmployeeID}`)

    }//if

  }//onTableClick

  onPrevClick(){

    this.Offset -= this.Limit;

    if(this.Offset < 0){

      this.Offset = 0;

    }//if
    else {

      this.getEmployeeList();

    }//else

  }//onPrevClick

  onNextClick(){

    if(this.employeeList.length > 0){

      this.Offset += this.Limit;

      this.getEmployeeList();

    }//if

  }//onNextClick

  onLimitChange(event){

    let limit = event.srcElement.value;

    if(+limit){

      this.Limit = +limit;
      this.getEmployeeList();

    }//if

  }//onLimitChange

  onSortChange(event){

    let sort = event.srcElement.value;

    this.Offset = 0;

    if(sort){

      this.Sort = sort.toUpperCase();
      this.getEmployeeList();

    }//if

  }//onSortChange

  onSearchChange(event){

    let search = event.srcElement.value;

    this.Offset = 0;

    this.SearchValue = '';

    if(search){

      this.Search = search;

    }//if

    this.getEmployeeList();

  }//onSearchChange

  onOrderByChange(event){

    let orderBy = event.srcElement.value;

    this.Offset = 0;

    if(orderBy){

      if(orderBy === 'Position'){

        orderBy += 'ID';

      }//if

      this.OrderBy = orderBy;
      this.getEmployeeList();

    }//if

  }//onOrderByChange

  onSearchValueChange(){

    this.Offset = 0;

    this.getEmployeeList();

  }//onSearchValueChange

  onSignIn(){

    this.isAuthorized = true;
    this.MainMarginService.SetZeroMargin();

  }//onSignIn

  onLogOut(){

    this.isAuthorized = false;
    this.MainMarginService.SetCenterMargin();

  }//onLogOut

  ngOnInit() {

    this.getEmployeeList();

  }//ngOnInit

  getData(){

    return {

      limit: this.Limit,
      offset: this.Offset,
      orderBy: this.OrderBy,
      sort: this.Sort,
      search: this.SearchValue ? this.Search : null,
      searchValue: this.SearchValue ? this.SearchValue.trim() : null

    };

  }//getData

  async getEmployeeList(){

    if(this.isAuthorized){

      let data : any = await this.EmployeeService.getEmployeeList(this.getData(), this.AuthenticationService.GetToken());

      if(data.code === 200){

        this.employeeList = data.data;

      }//if
      else {

        this.employeeList = [];

      }//else

    }//if

  }//getEmployeeList

  getDefaultPhoto(){

    return this.PhotoHelperService.DefaultPhotoPath;

  }//getDefaultPhoto

  getPhotoPath(imgName : string){

    return this.PhotoHelperService.getPhotoPath(imgName);

  }//getPhotoPath

  getNormalDate(date : string){

    if(date){

      date = date.replace('Z', '');
      date = date.replace('T', ' ');
      date = date.slice(0, date.lastIndexOf('.'));

      return date;

    }//if
    else {

      return null;

    }//else

  }//getNormalDate

}//ListComponent
