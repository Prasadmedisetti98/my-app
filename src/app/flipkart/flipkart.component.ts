import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  productName:string='';
  price:number=0;
  rating:number=0;
  deliveryDate:Date=new Date;
  freeDelivery:boolean=true;
  products:any =[
    {name:'Iphone',price:99999,rating:9.5,deliveryDate:"12/12/2024",freeDelivery:true},
    {name:'Samsung',price:89999,rating:9.3,deliveryDate:"12/10/2024",freeDelivery:true},
    {name:'Redmi',price:79999,rating:8.5,deliveryDate:"12/22/2024",freeDelivery:true},
    {name:'Vivo',price:69999,rating:7.5,deliveryDate:"12/29/2024",freeDelivery:true}

  ]
  submit(){
    let product={
      name:this.productName,
      price:this.price,
      rating:this.rating,
      deliveryDate:this.deliveryDate,
      freeDelivery:this.freeDelivery
    }
    
    this.products.push(product);
  }

  delete(i:number){
    this.products.splice(i,1)
  }

}
