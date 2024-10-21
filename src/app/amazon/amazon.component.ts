import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {

  productName:string = "";
  price:number = 0;
  rating:number = 0;
  freeDelivery: boolean = true;
  term: string = "";
  cs:number=0;

  products = [
    { productName: 'earbuds', price: 4599, rating: 9.5, freeDelivery: true },
    { productName: 'latops', price: 69000, rating: 9.3, freeDelivery: true },
    { productName: 'pen', price: 10, rating: 3, freeDelivery: true },
    { productName: 'phone', price: 12000, rating: 2, freeDelivery: false },
    { productName: 'shirt', price: 400, rating: 4, freeDelivery: true },
    { productName: 'cap', price: 200, rating: 5, freeDelivery: false },
    { productName: 'mobile case', price: 300, rating: 2, freeDelivery: true },
    { productName: 'remote', price: 320, rating: 2.5, freeDelivery: false }
  ]

  cartSize(){
    this.cs=this.products.length;
  }

  search() {
    this.products = this.products.filter((product) => product.productName.includes(this.term));
  }

  freeDel() {
    this.products =this.products.filter(product=>product.freeDelivery == true);
  }

  pricelh() {
    this.products.sort((a, b) => a.price - b.price);
  }
  pricehl() {
    this.products.sort((a, b) => b.price - a.price);
  }
  ratinglh() {
    this.products.sort((m, n) => m.rating - n.rating);
  }
  ratinghl() {
    this.products.sort((m, n) => n.rating - m.rating);
  }

  discount() {
    this.products = this.products.map(product => {
      product.price = product.price / 2;
      return product;
    })
  }
  addDeliveryCharges() {
    this.products = this.products.map(product => {
      product.price = product.price + 25;
      return product;
    })
  }

  totalPrice() {
    var total = this.products.reduce((a, b) => a + b.price, 0);
    alert("Total cart price : " + total);

  }


  submit() {
    let product = {
      productName: this.productName,
      price: this.price,
      rating: this.rating,
      freeDelivery: this.freeDelivery
    }
    this.products.push(product);
  }

  delete(i: number) {
    this.products.splice(i, 1)
  }
}
