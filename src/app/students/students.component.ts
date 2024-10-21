import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(private _studentsServices:StudentsService){}

  public studentsForm:FormGroup=new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    profile_picture:new FormControl(),
    email:new FormControl(),
    school_logo:new FormControl(),
    school_name:new FormControl(),
    school_city:new FormControl(),
    school_pin:new FormControl(),
    profile:new FormControl(), 
  })
  
  submit(){
    console.log(this.studentsForm);
    this._studentsServices.addStudentDetails(this.studentsForm.value).subscribe(
      (data:any)=>{
        alert("Students Details added Successfully...!!");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
}
