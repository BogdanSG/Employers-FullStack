import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { TreeModule } from 'angular-tree-component';
import { HttpClientModule }   from '@angular/common/http';
import { TreeviewPageComponent } from './components/pages/treeview-page/treeview-page.component';
import { TreeviewComponent } from './components/main/treeview/treeview.component';
import { SingleEmployeeComponent } from './components/main/single-employee/single-employee.component';
import { SingleEmployeePageComponent } from './components/pages/single-employee-page/single-employee-page.component';
import {EmployeeService} from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    TreeviewPageComponent,
    TreeviewComponent,
    SingleEmployeeComponent,
    SingleEmployeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreeModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
