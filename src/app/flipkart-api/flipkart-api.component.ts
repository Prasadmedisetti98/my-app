import { Component } from '@angular/core';
import { FlipkartApiService } from '../flipkart-api.service';

@Component({
  selector: 'app-flipkart-api',
  templateUrl: './flipkart-api.component.html',
  styleUrls: ['./flipkart-api.component.css']
})
export class FlipkartApiComponent {

details:any=[];
constructor(private _flipkartApiService:FlipkartApiService){
  _flipkartApiService.getFlipkartApi().subscribe(
    (data:any)=>{
      this.details=data;
    },
    (err:any)=>{
      alert(err.error);
    }
  )
}

}
