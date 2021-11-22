import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  cdata: Sitems[]=[];
  mdata: Sitems[]=[];

  constructor(private http: HttpClient) { }

  
  
  
  sData(d: Sitems){
    this.mdata.push(d);
    // this.mdata=this.mdata;
    console.log(this.mdata)

  }
 
  gData() {
   
    return this.mdata
   
    }

 

  setData(data: Sitems){
    this.mdata.forEach((value, index) => {
      if (value.name == data.name) this.mdata.splice(index, 1);
    });
    this.cdata.push(data);
    // this.cdata=this.cdata;
  }

  getData(){
    console.log(this.cdata)
    return this.cdata;
    
  }
}
