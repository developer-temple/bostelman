import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrunetteComponent } from './brunette.component';

describe('BrunetteComponent', () => {
  let component: BrunetteComponent;
  let fixture: ComponentFixture<BrunetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrunetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrunetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
