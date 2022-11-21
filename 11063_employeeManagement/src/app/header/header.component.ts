import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export default class HeaderComponent implements OnInit {
  title = '11063_employeeManagement';

  constructor(public authService:AuthService, 
    private router:Router) { }

  ngOnInit(): void {
  }
  
  logout() 
  {
      this.authService.logout();
      this.router.navigate(['/login']);
      }
  
}
