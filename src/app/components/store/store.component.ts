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
    
  }
  clickMe(){
    this.ngxLoader.start();
    setTimeout(()=>{
      this.ngxLoader.stop();
    },3000);
      
  }

}
