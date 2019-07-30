import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  receivedCategory:any
  allProductsInCategory:any
  count=0

  constructor(private activeRoute: ActivatedRoute, private shop:ShopService) { }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params.categoryname);
    this.activeRoute.params.subscribe(routeParam=>{
      console.log(routeParam);
      this.receivedCategory = routeParam.categoryname
      console.log(this.receivedCategory);
      this.shop.getAllProductsByCategory(this.receivedCategory).subscribe(productsInCategory => {
        this.allProductsInCategory = productsInCategory
        this.count = Object.keys(this.allProductsInCategory).length
      })
    })
  }

}
