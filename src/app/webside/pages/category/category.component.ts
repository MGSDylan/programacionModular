import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoriaId: string | null = null;
  limit = 10;
  offset = 0;
  products: Product[] = [];


  constructor(private route: ActivatedRoute, private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.categoriaId = params.get('id'); // Obtiene el parámetro 'id' de la URL
          if (this.categoriaId) {
            return this.productService.getById(this.categoriaId, this.limit, this.offset); // Retorna el Observable
          }
          return []; // Si no hay id, retorna un array vacío
        })
      )
      .subscribe(
        (res) => {
          this.products = res; // Asigna los productos recibidos
          console.log(res);
        },
        (error) => {
          console.error('Error obteniendo productos:', error);
        }
      );
  }

} 
