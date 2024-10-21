import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) {}

  getStudents():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
  getStudent(id:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+id);
  }

  addStudentDetails(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
  }
  getFilteredStudent(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }

 deleteStudent(id:string):Observable<any>{
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
 }

 sortedStudent(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
 }

getPagedstudent(page:number,limit:number):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
}



}
