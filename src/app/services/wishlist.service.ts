import { Injectable } from '@angular/core';
import { Food } from '../models/food.model'; // Importa el modelo Food

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: Food[] = []; // Declara wishlist como un array de Food

  constructor() { }

  addToWishlist(item: Food) { // Declara el tipo del parámetro como Food
    this.wishlist.push(item);
  }

  getWishlist(): Food[] { // Declara el tipo de retorno como Food[]
    return this.wishlist;
  }

  isItemInWishlist(item: Food): boolean { // Declara el tipo del parámetro como Food y el tipo de retorno como boolean
    return this.wishlist.some(wishItem => wishItem.id === item.id);
  }

  removeFromWishlist(item: Food) { // Declara el tipo del parámetro como Food
    this.wishlist = this.wishlist.filter(wishItem => wishItem.id !== item.id);
  }
}
