import { Component, OnInit } from '@angular/core';


import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = []

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private route: Router,


  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });

    this.categoriesService.getAll().subscribe((res) => {
      this.categories = res
    })
    this.authService.myUser$.subscribe((user) => {
      this.profile = user;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  logOut() {
    this.authService.logOut();
    this.profile = null;

  }

  login() {
    //this.authService.loginAndGet('john@mail.com', 'changeme').subscribe(
    this.authService.loginAndGet('admin@mail.com', 'admin123').subscribe(
      () => this.route.navigate(['/profile'])
    );

  }

}
