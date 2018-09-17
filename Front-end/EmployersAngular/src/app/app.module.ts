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
import { ListComponent } from './components/main/list/list.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { SignInComponent } from './components/main/sign-in/sign-in.component';
import { SignUpComponent } from './components/main/sign-up/sign-up.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import {AuthenticationService} from './services/authentication.service';
import {FormsModule} from '@angular/forms';
import {RegexHelperService} from './services/regex-helper.service';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import {PhotoHelperService} from './services/photo-helper.service';
import {MainMarginService} from './services/main-margin.service';

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
    SingleEmployeePageComponent,
    ListComponent,
    ListPageComponent,
    SignInComponent,
    SignUpComponent,
    SignUpPageComponent,
    SignInPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TreeModule.forRoot()
  ],
  providers: [EmployeeService, AuthenticationService, RegexHelperService, PhotoHelperService, MainMarginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
