import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blonde',
  templateUrl: './blonde.component.html',
  styleUrls: ['./blonde.component.scss']
})
export class BlondeComponent implements OnInit {
  quote:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lacus, accumsan id massa at, vehicula vehicula orci. Donec ac sem eu nisl tristique facilisis eget vitae urna.'
  constructor() { }

  ngOnInit() {
  }

}
