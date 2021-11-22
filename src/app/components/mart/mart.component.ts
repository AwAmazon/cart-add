
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Samitems } from '../cart/cart.component';
import { SharedService } from '../shared/shared.service';

 
export class Sampleitems {
  constructor(
    public id: number,
    public name: string,
    public price: number

  ){
    id: Number;
    name: String;
    price: Number;
  }
}

@Component({
  selector: 'app-mart',
  templateUrl: './mart.component.html',
  styleUrls: ['./mart.component.css']
})


export class MartComponent implements OnInit {

  sampleitem1: Sampleitems[]=[];
  cartitems: Sampleitems[]=[];

  

  constructor(private http:HttpClient, public shservice: SharedService) { 
    
  }

  ngOnInit(): void {

  let url = 'http://localhost:3000/items';
   
   this.http.get(url).subscribe((data: any)=>
   {
     this.sampleitem1=data;
     
     this.displayMart();

   });

    
    
    
  }

  //❌❌ sample item , remove this from your code

  
  
  
  
  

  displayMart(){
    //how will you move the item to cart

     //how will you move the item to cart
   //this.sampleitem1=this.shservice.gData();

   
   
   
   
  

   console.log(this.sampleitem1);
   this.sampleitem1.forEach((value, index)=>{
     this.shservice.mdata.push(value);
    if (value.name!=this.shservice.gData()[0].name)
    this.sampleitem1.push(this.shservice.gData()[0])
  });
   
  }

  

  moveToCart(e: Sampleitems){
    //how will you move the item to cart
    
    this.sampleitem1.forEach((value, index)=>{
      if (value.name==e.name)
      this.sampleitem1.splice(index,1);
    });
    
     
     this.shservice.setData(e);
  }

  }


