import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartApiService {

  constructor( private _httPclient:HttpClient) { }

  getFlipkartApi():Observable<any>{
    return this._httPclient.get("https://fakestoreapi.com/products");
  }
}
