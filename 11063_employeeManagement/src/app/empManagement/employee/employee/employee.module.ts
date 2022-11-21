import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { IEmployee } from 'src/app/interfaces/IEmployee';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import  empList from 'src/app/files/employee.json'
import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from '../home/home/home.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ]
})
export class EmployeeModule 
{
 
 }
