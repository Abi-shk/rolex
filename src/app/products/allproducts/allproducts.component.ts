import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  allProducts: any=[]
  categoryProducts:any=[]


  constructor(private ds:DataService) {}
  ngOnInit(): void {
     
     this.ds.getAllProducts().subscribe({
      next:(result:any)=>{
        this.allProducts=result
        console.log(this.allProducts);
        this.categoryProducts=this.allProducts
        
      }
     })


  }

categoryProduct(catId:any){

  this.categoryProducts=this.allProducts.filter((item:any)=>
  item.categoryId==catId || catId==""
  )
console.log(this.categoryProducts);

}

}
