import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brunette',
  templateUrl: './brunette.component.html',
  styleUrls: ['./brunette.component.scss']
})
export class BrunetteComponent implements OnInit {
  quote:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh lacus, accumsan id massa at, vehicula vehicula orci. Donec ac sem eu nisl tristique facilisis eget vitae urna.'
  constructor() { }

  ngOnInit() {
  }

}
