import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './empManagement/employee/home/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'',title: 'home', component:HomeComponent},
  { path: 'login',title: 'login',loadChildren:()=> import('./empManagement/employee/login/login.module').then(m=>m.LoginModule) },
  { path: 'employee/:id', loadChildren:()=> import('./empManagement/employee/employee/employee.module').then(m=>m.EmployeeModule) ,
  canActivate: [AuthGuard, RoleGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//,loadChildren:()=> import('./empManagement/employee/home/home.module').then(m=>m.HomeModule) 
