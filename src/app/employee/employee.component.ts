import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

   name:string='';
   experience:number=0;
   package:number=0;
   role:string='';
   searchByName:string='';
   i:number=1;
   

  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'zamar', experience: 6, package: 1200000, role: 'UIDeveloper' },

]

submit(){
 const employee={
  name:this.name,
  experience:this.experience,
  package:this.package,
  role:this.role,
 };
 this.employees.push(employee);
}
search(){
  this.employees=this.employees.filter((employee)=>employee.name.includes(this.searchByName));
}
delete(i:number){
  this.employees.splice(i,1);
}

bonus(){
  this.employees=this.employees.map(a=>{
    a.package=a.package+30000;
    return a;
  })
}
hike(){
  this.employees=this.employees.map(a=>{
    a.package=a.package+(0.2*a.package)+30000;
    return a
  });
}

packageltoh(){
  this.employees.sort((a,b)=>a.package-b.package);
}
packagehtol(){
  this.employees.sort((a,b)=>b.package-a.package)
}
experiencehtol(){
  this.employees.sort((a,b)=>a.experience-b.experience)
}
experienceltoh(){
  this.employees.sort((a,b)=>b.experience-a.experience)
}
expenditure(){
  var total = this.employees.reduce((sum,product)=>sum+product.package,0)
  alert("Total Expenditure For Company : "+total)
}

totalemployees(){
  alert("Total EMployees : "+this.employees.length)
}

}


