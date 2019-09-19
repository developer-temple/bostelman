import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarfComponent } from './scarf.component';

describe('ScarfComponent', () => {
  let component: ScarfComponent;
  let fixture: ComponentFixture<ScarfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScarfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScarfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
