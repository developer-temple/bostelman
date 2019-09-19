import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shop.service'
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() item:Item;
  
  truncatedDescription:string;
  backgroundUrl:string;
  
  constructor(private helpers:HelpersService){}

  ngOnInit(){
    this.truncatedDescription = this.helpers.Truncate(this.item.description, 6);
    this.backgroundUrl = `url('${this.item.image.src}')`;
  }
}