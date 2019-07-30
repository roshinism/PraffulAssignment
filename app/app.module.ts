import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop/shop.component';
import { HeaderComponent } from './shop/header/header.component';
import { CategoryComponent } from './shop/category/category.component';
import { ShowproductComponent } from './shop/showproduct/showproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    CategoryComponent,
    ShowproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
