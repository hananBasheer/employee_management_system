import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/IEmployee';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
 credentials!:IEmployee[];

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService:AuthService
  
  ) {
    this.loginForm= this.formBuilder.group({
      userId: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {}
 public userId:any
 public password:any
 currentUser: IEmployee[]=[];

  validateUser() 
  {
    this.userService.getEmployeeInfo().subscribe(
      (response:any)=>
       {  
            this.credentials=response;
              for(let cred of this.credentials)
              {
                  if((this.userId==cred.employeeId) && (this.password==cred.password))
                      {
                        this.authService.login(cred);
                        break;
                      }                                           
              }
              this.loginForm.reset();

      }
    )
  }
 

}
