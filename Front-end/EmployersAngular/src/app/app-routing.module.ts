import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {TreeviewPageComponent} from './components/pages/treeview-page/treeview-page.component';
import {SingleEmployeePageComponent} from './components/pages/single-employee-page/single-employee-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'treeview', component: TreeviewPageComponent },
      { path: 'single-employee/:id', component: SingleEmployeePageComponent },
      { path: '**', redirectTo: '/home' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
