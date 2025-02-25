import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product!:Product;

  constructor(private route: ActivatedRoute,private productsService: ProductsService,private router: Router,private location:Location){
    route.paramMap.pipe(

      switchMap((params)=>{
        const id=params.get('id')
        console.log(id);
        return productsService.getOne(id??'');
      })
    ).subscribe((res)=>{
      console.log(res)
      this.product=res
    })
  }


  goToBack(){
    this.location.back();
  }
}
