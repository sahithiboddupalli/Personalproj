import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personalfrontend';
  public employees!: Employee[];
  emp!: Employee;
  
  
  constructor(private employeeService: EmployeeService){
    this.emp= new Employee();
  };
  ngOnInit() {
      this.getEmployee();
  }
  public getEmployee():void{
    this.employeeService.getEmployee().subscribe(
      (response: Employee[])=> {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public addEmployee(val:NgForm){
    
  
    this.employeeService.addEmployee(this.emp).subscribe(
      (response: Employee)=>{
        //val.name = JSON.stringify(response.name);
        console.warn(response);
        this.getEmployee();
        
      }
    )
    console.warn(val);
  }

  public updateEmployee(val:Employee){
    this.employeeService.updateEmployee(val).subscribe(
      (response:Employee)=>{
        console.warn(response);
        this.getEmployee();
      }
    )
  }
 // public addEmployee(val: Employee){
  
 //   this.employeeService.addEmployee(val).subscribe(
   //   (response: Employee)=>{
     //   //val.name = JSON.stringify(response.name);
       // console.warn(response);
        //this.getEmployee();
        
      //}
    //)
    //console.warn(val);
 // }


}
