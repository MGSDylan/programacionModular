import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsService = inject(ProductsService);
  router = inject(ActivatedRoute);

  products: Product[] = [];
  productId: string|null =null;
  limit = 10;
  offset = 0;

  ngOnInit(): void {
    this.productsService.getAll(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });

    this.router.queryParamMap.subscribe(
      (res)=>{  
        this.productId=res.get('product')
        console.log('here',this.productId)
      }
    )
  }

  onLoadMore() {
      this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
    
  }

}


