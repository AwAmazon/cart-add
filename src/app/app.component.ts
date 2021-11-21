import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'easyecom-assignment';

  walletAmount  = 5000
  totalBill = 300
  constructor() {
  }


  ngOnInit(): void {



  }

  buy(){
    
  }
}
