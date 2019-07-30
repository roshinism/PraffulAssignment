import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductComponent } from './shop/showproduct/showproduct.component';


const routes: Routes = [
  {
    path:'showproducts/:categoryname',
    component:ShowproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
