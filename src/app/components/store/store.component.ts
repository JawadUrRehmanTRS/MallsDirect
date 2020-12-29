import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    setTimeout(()=>{
        console.log("hello")
    },3000)
  }
  clickMe(){
    this.ngxLoader.start();
    console.log(this.ngxLoader)
    setTimeout(()=>{
      this.ngxLoader.stop();
    },3000);
      
  }

}
