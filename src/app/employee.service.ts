import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerURL = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerURL}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerURL}/employee/add`, employee);
  }

  public updateEmployee(employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerURL}/employee/update`, employee);
  }

  public findEmployeeById(employeeId: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerURL}/employee/find/${employeeId}`, employeeId);
  }
}
