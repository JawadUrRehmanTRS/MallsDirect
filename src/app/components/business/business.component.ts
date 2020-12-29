import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  fakeArray = new Array(12);
  constructor() { }

  ngOnInit(): void {
   console.log(this.fakeArray);
  }
  checkModel: any = { left: true, right: false };
}
