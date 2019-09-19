import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scarf',
  templateUrl: './scarf.component.html',
  styleUrls: ['./scarf.component.scss']
})
export class ScarfComponent implements OnInit {
  quote:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Praesent nibh lacus, accumsan id massa at, vehicula vehicula orci. Donec ac 
  sem eu nisl tristique facilisis eget vitae urna.`
  
  constructor() {}
  ngOnInit() {}
}
