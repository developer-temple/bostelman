import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  services = [
    { value: 'cutting', label: 'Cutting' },
    { value: 'coloring', label: 'Coloring' },
    { value: 'weaving', label: 'Weaving' },
    { value: 'perming', label: 'Perming' },
    { value: 'malibus', label: 'Malibus' },
    { value: 'deepConditioning', label: 'Deep Conditioning' },
    { value: 'thinningHairTreatments', label: 'Thinning Hair Treatments' },
    { value: 'waxing', label: 'Waxing' }
  ];

  onSubmit(form: NgForm) {
    console.log(form);
  }
}