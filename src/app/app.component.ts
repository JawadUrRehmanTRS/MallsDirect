import { Component } from '@angular/core';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  public showOverlay = true;
  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.showOverlay = true;
      }
      if (event instanceof NavigationEnd) {
          this.showOverlay = false;
      } 
       
    })
  }

  
}
