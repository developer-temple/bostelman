import { Component, OnInit, HostListener } from '@angular/core';
import { ShopService } from '../shop.service';
import { Cart } from '../shop.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  className:string;
  cart:Cart;
  constructor(private shopService:ShopService) { 
    this.cart = shopService.cart;
    // window.addEventListener('scroll', this.setBackgroundColor)
  }
  

  ngOnInit() {
    // window.addEventListener('scroll', this.setBackgroundColor)
  }

  ngOnDestroy() {
    // window.removeEventListener('scroll', this.setBackgroundColor)
  }

  @HostListener('window:scroll', ['$event'])
  setBackgroundColor() {
    const { pageYOffset, innerHeight } = window
    if(pageYOffset >= innerHeight) {
      this.className = 'toolbar opaque'
    } else {
      this.className = 'toolbar'
    }
  }
}