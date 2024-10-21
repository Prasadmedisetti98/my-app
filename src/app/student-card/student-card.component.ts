import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  students: any = [];
  term: string = "";
  column: string = "";
  order: string = "";
  public limit:number=1;
  public page:number = 1;
  constructor(private _studentsService: StudentsService) {

    this._studentsService.getStudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  delete(id: string) {
    this._studentsService.deleteStudent(id).subscribe(
      (data: any) => {
        alert("Deleted Successfully");
        // location.reload();
        this.students = this.students.filter((student: any) => student.id !== id);

      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  search() {
    this._studentsService.getFilteredStudent(this.term).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  sort() {
    this._studentsService.sortedStudent(this.column, this.order).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  pagination() {
    this._studentsService.getPagedstudent(this.page,this.limit).subscribe(
      (data:any)=> {
      this.students = data;
    },
    (err: any) => {
      alert(err.error);
    }
  )
  }

}
