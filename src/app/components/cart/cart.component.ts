import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

export class Samitems {
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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable( {providedIn: 'any'})
export class CartComponent implements OnInit {
   
  samitem: Samitems[]=[];
  
  constructor(private http: HttpClient, private shservice: SharedService) { }
  
  
  

  ngOnInit(): void {
    this.displayCart();
    
    
  }
  
   displayCart(){
     this.samitem=this.shservice.getData();
     console.log(this.samitem)
   }
  
  //❌❌ sample item , remove this from your code
   
  
  

  removeFromCart(f :Samitems){

    this.samitem.forEach((value, index)=>{
      if (value.name==f.name)
      this.samitem.splice(index,1);
    });

    

    
    this.shservice.sData(f);
   
    
  }

}
