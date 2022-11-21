import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './empManagement/employee/employee/employee.module';
import { HomeComponent } from './empManagement/employee/home/home/home.component';
import { LoginModule } from './empManagement/employee/login/login.module';
import HeaderComponent from './header/header.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    LoginModule, 
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
