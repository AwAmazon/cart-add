import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { SharedService } from './components/shared/shared.service';

export class Sitems {
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'easyecom-assignment';

  walletAmount  = 5000
  totalBill = 300
  cdata: Sitems[]=[];
  bill = 0

  constructor(private shservice: SharedService) {
  }


  ngOnInit(): void {

   this.billDetails();
    
  }


  billDetails(){
    this.cdata=this.shservice.getData();
   console.log("hello")
   console.log(this.cdata)
   for ( var i of this.cdata){
      this.bill=this.bill+i.price;

   }
  }

  buy(){
    
  }
}
