import { Component } from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent {
  heading = 'The Unique Botique & Salon'
  subheading = "@ The Element"
  linkLabel = 'Make An Appointment!'
}