import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IEmployee } from '../interfaces/IEmployee';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  currentUser:any;
  constructor(private authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
   let id = route.paramMap.get('id');
   this.currentUser= this.authService.getCurrentUser();
   console.log(this.currentUser.employeeId);
   if((this.currentUser.teamName=='Admin'||this.currentUser.teamName=='HR')||(id==this.currentUser.employeeId))
   {
      return true;
   }   
     return false ;
    
  }
}
  
  

