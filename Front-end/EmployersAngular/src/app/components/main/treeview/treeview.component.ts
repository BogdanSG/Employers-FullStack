import { Component, OnInit } from '@angular/core';
import {ITreeOptions} from 'angular-tree-component';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {

  nodes : Array<any> = [];
  options : ITreeOptions = {
    getChildren: this.getChildren.bind(this)
  };

  constructor(private EmployeeService : EmployeeService, private Router : Router) {

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
      resolve(newNodes);
    });

  }

  onActivate(event: any){

    let id = event.node.data.id;

    if(id !== 0){

      this.Router.navigateByUrl(`/single-employee/${event.node.data.id}`);

    }//if

  }//onFocus

  ngOnInit() {

  }//ngOnInit

}//TreeviewComponent
