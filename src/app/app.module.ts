import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreComponent } from './components/store/store.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { BusinessComponent } from './components/business/business.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './components/widgets/search-bar/search-bar.component';
import { CardsComponent } from './components/widgets/cards/cards.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreComponent,
    FooterComponent,
    ProductsComponent,
    BusinessComponent,
    SearchBarComponent,
    CardsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiSwitchModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
