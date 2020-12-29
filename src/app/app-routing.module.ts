import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { ProductsComponent } from './components/products/products.component';
import { StoreComponent } from './components/store/store.component';
 

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'business', component: BusinessComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
