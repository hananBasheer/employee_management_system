//fakebackend implementation
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { request } from 'http';
import employees from 'src/assets/files/employee.json'
import { IEmployee } from '../interfaces/IEmployee';
import { Token } from '@angular/compiler';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  employee:IEmployee[]=[];
  constructor( ) { 

  }
  
   token:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
  
  api_Url:string="http://localhost:4200/employee/"
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    if(request.method === "POST" )
     {
      for (let emp of employees)
      {
       if(request.url ==(`${this.api_Url}${emp.employeeId}`)) {
          return of(new HttpResponse({ status: 200, body:{ emp,token: this.token }}));

        }
      }
    }
  
    if(request.method === "GET" ) {
      for (let emp of employees)
      {
      if(request.url ==(`${this.api_Url}${emp.employeeId}`)) {
        return of(new HttpResponse({ status: 200, body:emp}));

        }
      }
    }
    return next.handle(request);
  
}
}
