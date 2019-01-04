 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {path : '', redirectTo : '/departments' , pathMatch : 'full'},
  { path : 'departments/:id' , component : EmployeeDetailComponent},
  {path : 'departments' , component : DepartmentListComponent },
  {path : 'employees' , component : EmployeeListComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [ DepartmentListComponent , EmployeeListComponent , EmployeeDetailComponent, PageNotFoundComponent]