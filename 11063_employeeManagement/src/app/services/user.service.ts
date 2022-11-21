import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../interfaces/IEmployee';
import { ITeamConfig } from '../interfaces/ITeamConfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = 'http://localhost:4200/employee/';
  employee:IEmployee[]=[]
  constructor(private http : HttpClient) { }

  postEmployeeInfo(employee:IEmployee):Observable<IEmployee[]>
  {
    let id = employee.employeeId;
    return this.http.post<IEmployee[]>(`${this.API_URL}${id}` ,employee);
  }
   
  getEmployeeInfo():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>('./assets/files/employee.json');
  }

  getTeam():Observable<ITeamConfig[]>
  {
    return this.http.get<ITeamConfig[]>('./assets/files/teamConfig.json');
  }



}
