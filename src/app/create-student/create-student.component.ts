import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    class: new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
    fatherName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl('',[Validators.required]),

    address: new FormGroup({
      addressline: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    
    type: new FormControl(),

    company: new FormGroup({
      name: new FormControl('',[Validators.required]),
      package: new FormControl('',[Validators.required,Validators.min(1000000),Validators.max(2500000)]),
    }),

    marks:new FormArray([])
  })


    get marksFormArray() {
      return this.studentForm.get('marks') as FormArray;
    }

  addmarks() {
      this.marksFormArray.push(
        new FormGroup({
          class: new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
          year: new FormControl('',[Validators.required]),
          percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
        })
      )
    }
    delete(i:number){
      this.marksFormArray.removeAt(i);
    }


    constructor(){
      this.studentForm.get('type')?.valueChanges.subscribe(
        (data:any)=>{
          if(data=='dayScholar'){
            this.studentForm.addControl('busFee',new FormControl());
            this.studentForm.removeControl('hostelFee')
          }

          else{
            this.studentForm.addControl('hostelFee',new FormControl());
            this.studentForm.removeControl('busFee')
          }
        }
      )
    }

submit(){
  this.studentForm.markAllAsTouched();
  console.log(this.studentForm.value);
}

}
