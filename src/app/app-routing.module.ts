import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
 

const routes: Routes = [
  {path: "", redirectTo:'store', pathMatch:'full' },
  { path: 'store', component: StoreComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'resetPassword', component:ResetPasswordComponent},
  { path: 'forgetPassword', component:ForgetPasswordComponent},
  { path: 'profile', component:ProfileComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
