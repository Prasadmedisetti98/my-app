import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {


  age:number=25;
  name: string="Prasad";
  phone:string="+91"
  isValid:boolean=true;

  submit(){
    alert("submit clicked");
  }

  typing(){
    alert("typing");
  }
}
