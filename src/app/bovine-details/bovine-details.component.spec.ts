import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BovineDetailsComponent } from './bovine-details.component';

describe('BovineDetailsComponent', () => {
  let component: BovineDetailsComponent;
  let fixture: ComponentFixture<BovineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BovineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BovineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
