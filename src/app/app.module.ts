import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//ngx-modules
import { UiSwitchModule } from 'ngx-toggle-switch';
import { NgxUiLoaderModule } from "ngx-ui-loader";
//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//routing
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreComponent } from './components/store/store.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { BusinessComponent } from './components/business/business.component';
import { SearchBarComponent } from './components/widgets/search-bar/search-bar.component';
import { CardsComponent } from './components/widgets/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';



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
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiSwitchModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
