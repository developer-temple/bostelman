import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyright:string = `The Unique Boutique & Spalon, ${new Date().getFullYear()}`;
  signature:string = `Created By Temple Design Solutions`
  constructor() { }

  ngOnInit() {
  }
}
