import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import  empList from 'src/app/files/employee.json'
import { IEmployee } from 'src/app/interfaces/IEmployee';
import { UserService } from 'src/app/services/user.service';
import { forkJoin, map, never, observable, of, pipe, switchMap } from 'rxjs';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  employeeList:IEmployee[]=[];
  currentUser!: IEmployee;
  teamNumber!:Number;
  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute,private userService :UserService)
  {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.authService.getEmployeeInfo(id).subscribe((response:IEmployee) => {
        this.currentUser = response;
        console.log(response);
        
      forkJoin([
        this.userService.getEmployeeInfo(),
         this.userService.getTeam()]).subscribe(([employeeArray, teamArray]) => 
         {        
              
                  //this.teamNumber =if(this.teamArray.find(team => team.teamName === employeeArray))

                    for(var j=0;j<teamArray.length;j++)
                    {
                          if (this.currentUser.teamName==teamArray[j].teamName)
                          {
                            this.teamNumber=teamArray[j].teamNumber
                            console.log(teamArray[j].teamNumber);
                            break;


                          }
                                        
                    }
                }
        //  }
         )



    })

  }


}
