import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  heading = `Hi! I'm Kelly!`;
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eu sem sed massa lacinia consequat vitae ut ante. Nunc sodales tempus aliquet. Mauris sed arcu libero. Sed aliquam tristique porta. Fusce dictum tincidunt turpis, sit amet placerat leo euismod at.'
  image = {
    src: '../../assets/lookup.png',
    alt: 'A girl looking up.'
  }
  constructor() {}
  ngOnInit() {}
}