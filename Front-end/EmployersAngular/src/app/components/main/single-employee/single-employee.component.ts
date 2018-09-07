import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../../services/employee.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.css']
})
export class SingleEmployeeComponent implements OnInit {

  EmployeeID: number;
  Employee: any;
  Positions: Array<any>;

  constructor(private ActivatedRoute: ActivatedRoute, private EmployeeService: EmployeeService) {

    let id = +this.ActivatedRoute.snapshot.params['id'];

    if(id){

      this.EmployeeID = id;

    }//if

  }//constructor

  async ngOnInit() {

    if(this.EmployeeID){

      let data: any = await this.EmployeeService.getFullEmployee(this.EmployeeID);

      if(data.code === 200){

        this.Employee = data.data[0];

        this.Employee.EmploymentDate = this.Employee.EmploymentDate.replace('Z', '');

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

      }//if

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

  }//ngOnInit

}//SingleEmployeeComponent
