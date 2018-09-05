import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import { ITreeOptions } from 'angular-tree-component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  nodes : Array<any> = [];
  options : ITreeOptions = {
    getChildren: this.getChildren.bind(this)
  };

  constructor(private EmployeeService : EmployeeService) {

    this.nodes.push({
      id: 0,
      name: 'Employees',
      hasChildren: true
    });

  }//constructor

  async getChildren(node: any) {

    let employeeID = node.id != 0 ? node.id : null;

    let data : any = await this.EmployeeService.getTreeEmployee(employeeID);

    let nodes = [];

    if(data.code === 200 && data.data.length > 0){

      data.data.forEach(item => {

        nodes.push({
          id: item.EmployeeID,
          name: `${item.FirstName} ${item.LastName} ${item.SurName} (${item.Position}) (${item.CountEmployees})`,
          hasChildren: item.CountEmployees > 0 ? true : false
        });

      });

      return nodes;

    }//if

    const newNodes = nodes.map((c) => Object.assign({}, c));

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(newNodes), 500);
    });

  }

  //
  // getChildren(node: any){
  //
  //   // let nodes = [];
  //   //
  //   // this.EmployeeService.getTreeEmployee().then(function (data : any) {
  //   //
  //   //   if(data.code === 200 && data.data.length > 0){
  //   //
  //   //     data.data.forEach(item => {
  //   //
  //   //       nodes.push({
  //   //         id: item.EmployeeID,
  //   //         name: `${item.FirstName} ${item.LastName} ${item.SurName} (${item.Position})`
  //   //       });
  //   //
  //   //     });
  //   //
  //   //     return nodes;
  //   //
  //   //   }//if
  //   //
  //   // });
  //
  //   let nodes = [{
  //     id: 0,
  //     name: 'Employees',
  //     hasChildren: true,
  //     isExpanded: false
  //   }];
  //
  //   const newNodes = nodes.map((c) => Object.assign({}, c));
  //
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(newNodes), 1000);
  //   });
  //
  // }//getChildren

  onActivate(event: any){


  }//onFocus

  ngOnInit() {

  }//ngOnInit

}//HomePageComponent
