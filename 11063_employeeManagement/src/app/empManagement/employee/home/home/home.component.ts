import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IEmployee } from 'src/app/interfaces/IEmployee';
import  empList from 'src/assets/files/employee.json'
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  currentUser:any;
  public employees:IEmployee[]=[];
  constructor(public router: Router, private http :HttpClient, private userService: UserService, private authService:AuthService){}
  
  ngOnInit(): void {
    this.userService.getEmployeeInfo().subscribe(
      (response:IEmployee[])=> { 
        this.employees=response; 
      }
    )
  
  }

  displayEmployee(employee:IEmployee)
    {
      // this.currentUser=this.authService.getCurrentUser();

          if(this.authService.isLoggedIn)  
              {
                this.router.navigate(['/employee/'+ employee.employeeId]);
              } 
          else
              this.router.navigate(['/login']);

      }

}
