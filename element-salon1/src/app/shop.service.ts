import { Injectable } from '@angular/core';

export interface Cart {
  items:Item[];
  count:number;
}

export interface Item {
  name:string;
  price:string;
  image:{ src:string, alt:string };
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cart:Cart;
  allItems:Item[];

  constructor() { 
    this.allItems = new Array<Item>();
    this.cart = {
      items: new Array<Item>(),
      count: 0
    }
    this.allItems.push({
      name: 'American Crew 3 in 1',
      price: '11',
      image: { src: '../assets/americanCrew_3in1.jpg', alt: 'Test alt'},
      description: 'Test description.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id suscipit dolor. In ut massa at est lacinia viverra eu non felis. Nullam vel rhoncus risus. Suspendisse in semper nibh. Fusce id ex eget nulla consectetur varius. Duis nec ornare orci. Aliquam erat volutpat.'
    })
    this.allItems.push({
      name: 'American Crew 3 in 1',
      price: '11',
      image: { src: '../assets/americanCrew_3in1.jpg', alt: 'Test alt'},
      description: 'Test description.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id suscipit dolor. In ut massa at est lacinia viverra eu non felis. Nullam vel rhoncus risus. Suspendisse in semper nibh. Fusce id ex eget nulla consectetur varius. Duis nec ornare orci. Aliquam erat volutpat.'
    })
    this.allItems.push({
      name: 'American Crew 3 in 1',
      price: '11',
      image: { src: '../assets/americanCrew_3in1.jpg', alt: 'Test alt'},
      description: 'Test description.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id suscipit dolor. In ut massa at est lacinia viverra eu non felis. Nullam vel rhoncus risus. Suspendisse in semper nibh. Fusce id ex eget nulla consectetur varius. Duis nec ornare orci. Aliquam erat volutpat.'
    })
  }
  
  AddToCart(item:Item) {
    this.cart.count++;
    this.cart.items.push(item);
  }

  ResetCart() {
    this.cart.count = 0;
    this.cart.items = new Array<Item>();
  }

  
}