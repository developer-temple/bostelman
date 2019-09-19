import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-services-grid',
  templateUrl: './servicesGrid.component.html',
  styleUrls: ['./servicesGrid.component.scss'],
  animations: [
    trigger('serviceTrigger', [
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        transform: 'translateX(100%)'
      }))
    ])
  ]
})
export class ServicesGridComponent implements OnInit {
  state:GridStates = GridStates.VISIBLE;

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

  name:string = 'Cutting'
  description:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  priceRange:{ min:string, max:string} = { min: '11', max: '19' }
  constructor() { }

  ngOnInit() {
  }


}

enum GridStates {
  VISIBLE,
  HIDDEN
}

// <ServiceItem name='Cutting' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
//           <ServiceItem name='Coloring' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
//           <ServiceItem name='Weaving' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
//           <ServiceItem name='Perming' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
//           <ServiceItem name="Malibu's" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
//           <ServiceItem name='Deep Conditioning' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
//           <ServiceItem name='Thinning Hair Treatments' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
//           <ServiceItem name='Waxing' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>