import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('leftServiceTrigger', [
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        transform: 'translateX(-100%)'
      })),
      transition('visible <=> hidden', animate(200))
    ]),
    trigger('rightServiceTrigger', [
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        transform: 'translateX(100%)'
      })),
      transition('visible <=> hidden', animate(200))
    ]),
    trigger('closeButtonTrigger', [
      state('visible', style({
        transform: 'scale(1)'
      })),
      state('hidden', style({
        transform: 'scale(0)'
      })),
      transition('visible <=> hidden', animate(200))
    ])
  ]
})
export class ServicesComponent implements OnInit {
  state:string = 'visible';
  buttonState:string = 'hidden';
  name:string = 'Cutting'
  description:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  priceRange:{ min:string, max:string} = { min: '11', max: '19' }
  linkLabel:string = 'Make An Appointment!'

  services = [
    'Cutting',
    'Coloring',
    'Weaving',
    'Perming',
    'Malibus',
    'Deep Conditioning',
    'Thinning Hair Treatments',
    'Waxing'
  ]

  constructor() {}
  ngOnInit() {}

  onServiceClicked(index:number) {
    console.log('on service clicked')
    this.name = this.services[index]
    if(this.state === 'visible') {
      this.state = 'hidden'
      this.buttonState = 'visible'
    } else {
      this.state = 'visible'
      this.buttonState = 'hidden'
    }
  }
}