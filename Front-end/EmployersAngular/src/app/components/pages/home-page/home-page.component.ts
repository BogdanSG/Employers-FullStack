import { Component, OnInit } from '@angular/core';
import {MainMarginService} from '../../../services/main-margin.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private MainMarginService : MainMarginService){

    this.MainMarginService.SetCenterMargin();

  }//constructor

  ngOnInit(){

  }//OnInit

}//HomePageComponent
