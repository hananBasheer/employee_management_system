import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable, throwError } from 'rxjs';
import { IEmployee } from '../interfaces/IEmployee';
import { __values } from 'tslib';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   emp :IEmployee[]=[];
  API_URL: string = 'http://localhost:4200';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser:object={};
  
  constructor(private httpClient: HttpClient,public router: Router, private userService : UserService){}


  get isLoggedIn():boolean{

    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
   }


    login(employee: IEmployee) {
       this.userService.postEmployeeInfo(employee)
        .subscribe((res: any) => {
          localStorage.setItem('access_token', res.token)
          localStorage.setItem('current_user',JSON.stringify(res.emp));
            this.getEmployeeInfo(employee.employeeId).subscribe((res) => {
              this.currentUser = res;
            this.router.navigate(['/employee/'+ employee.employeeId]);

          })
        })
    }

    getAccessToken() {
      return localStorage.getItem('access_token');
    }
    getCurrentUser()
    {
          return JSON.parse(localStorage.getItem('current_user')||'{}');

    }
  
  logout() {
      if (localStorage.removeItem('access_token') == null) {
          this.router.navigate(['login']);
        }
      }
      
  getEmployeeInfo(id:any): Observable<any> {
          return this.httpClient.get(`${this.API_URL}/employee/${id}`, { headers: this.headers });
          }
        
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
 }
