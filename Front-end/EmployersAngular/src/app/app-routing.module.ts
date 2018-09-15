import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {TreeviewPageComponent} from './components/pages/treeview-page/treeview-page.component';
import {SingleEmployeePageComponent} from './components/pages/single-employee-page/single-employee-page.component';
import {ListPageComponent} from './components/pages/list-page/list-page.component';
import {SignInPageComponent} from './components/pages/sign-in-page/sign-in-page.component';
import {SignUpPageComponent} from './components/pages/sign-up-page/sign-up-page.component';
import {NotFoundPageComponent} from './components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '404', component: NotFoundPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'treeview', component: TreeviewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: 'single-employee/:id', component: SingleEmployeePageComponent },
      { path: 'sign-in', component: SignInPageComponent },
      { path: 'sign-up', component: SignUpPageComponent },
      { path: 'single-employee/:id', component: SingleEmployeePageComponent },
      { path: '**', redirectTo: '/404' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
