import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Item } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    trigger('itemTrigger', [
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        transform: 'translateX(200%)'
      })),
      transition('visible <=> hidden', animate(200))
    ]),
  ]
})
export class ShopComponent implements OnInit {
  animState:string = 'visible';
  category:ShopCategories = ShopCategories.HAIR;
  items:Item[];
  constructor(private shopService:ShopService) {
    this.items = shopService.allItems;
  }
  ngOnInit() {}

  onItemClicked() {
    if(this.animState === 'visible') {
      this.animState = 'hidden'
    } else {
      this.animState = 'visible'
    } 
  }
  
}

enum ShopCategories {
  HAIR,
  BODY
}
