import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Producto 1',
        price: 12,
        image: 'assets/images/foods/producto 1.jpg',
        description:
          'In addition to the freshest seafood, there are corn, cilantro, and tomatoes: the first became mayonnaise, the second - cream, the third - spiced tomato water.',
      },
      {
        id: 2,
        title: 'Producto 2',
        price: 21,
        image: 'assets/images/foods/Producto 2.jpg',
        description:
          'In addition to the freshest seafood, there are corn, cilantro, and tomatoes: the first became mayonnaise, the second - cream, the third - spiced tomato water.',
      },
      {
        id: 3,
        title: 'Producto 3',
        price: 16,
        image: 'assets/images/foods/Producto 3.jpg',
        description:
          'In addition to the freshest seafood, there are corn, cilantro, and tomatoes: the first became mayonnaise, the second - cream, the third - spiced tomato water.',
      },
      {
        id: 4,
        title: 'Producto 4',
        price: 20,
        image: 'assets/images/foods/Producto 4.jpg',
        description:
          'In addition to the freshest seafood, there are corn, cilantro, and tomatoes: the first became mayonnaise, the second - cream, the third - spiced tomato water.',
      },
      {
        id: 5,
        title: 'Producto 5',
        price: 10,
        image: 'assets/images/foods/Producto 5.jpg',
        description:
          'In addition to the freshest seafood, there are corn, cilantro, and tomatoes: the first became mayonnaise, the second - cream, the third - spiced tomato water.',
      },
      {
        id: 6,
        title: 'Producto 6',
        price: 13,
        image: 'assets/images/foods/Producto 6.jpg',
        description:
          'In addition to the freshest seafood, there are corn, cilantro, and tomatoes: the first became mayonnaise, the second - cream, the third - spiced tomato water.',
      },
    ];
  }

  getFood(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
