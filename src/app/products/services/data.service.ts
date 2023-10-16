import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // API to access all products from products collection - get
  getAllProducts(){

     return this.http.get('http://localhost:3000/products')

  }

// API to get single product data
getProduct(id:any){
  return this.http.get('http://localhost:3000/products/'+id)
}

// API to delete
removeProduct(id:any){
  return this.http.delete('http://localhost:3000/products/'+id)
}

// API for add product
addProduct(bodyData:any){
  return this.http.post('http://localhost:3000/products',bodyData)

}

// Edit API
  updateProduct(id:any,bodyData:any){
    return this.http.put('http://localhost:3000/products/'+id,bodyData)
  }

}
