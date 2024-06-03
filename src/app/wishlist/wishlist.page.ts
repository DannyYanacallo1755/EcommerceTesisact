import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Food } from '../models/food.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  wishlist: Food[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(food: Food) {
    this.wishlistService.removeFromWishlist(food);
    this.wishlist = this.wishlistService.getWishlist(); 
  }
}
