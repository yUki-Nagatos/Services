import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/info-service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="yuki";
  functionclick() {
    const service=new MyService()
  }
  
   rep() {
      alert("Hello from Agile!");
  }


}
