import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/service/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  allCategory:any

  constructor(private shop:ShopService, private router:Router) { }

  ngOnInit() {
    this.shop.getAllCategories().subscribe(d=>{
      console.log(d);
      this.allCategory = d
    })
  }

  displayProduct = function(selected){
    console.log(selected);
    let selectedCategory = this.allCategory[selected].category
    this.router.navigate(['showproducts', selectedCategory])
  }

 

}
