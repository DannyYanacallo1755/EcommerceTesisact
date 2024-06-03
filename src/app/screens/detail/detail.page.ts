import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id!: number;
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private toastCtrl: ToastController
  ) {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
    }
  }

  ngOnInit() {
    const foodItem = this.foodService.getFood(this.id);
    if (foodItem) {
      this.food = foodItem;
    }
  }

  addItemToCart() {
    if (this.food) {
      const cartItem: CartItem = {
        id: this.food.id,
        name: this.food.title,
        price: this.food.price,
        image: this.food.image || '',
        quantity: 1,
      };

      this.cartService.addToCart(cartItem);
      this.presentToast('Food added to the cart');
    }
  }

  addToWishlist() {
    this.wishlistService.addToWishlist(this.food);
    this.presentToast('Food added to wishlist');
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
}
