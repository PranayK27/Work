import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BovineListComponent } from './bovine-list.component';

describe('BovineListComponent', () => {
  let component: BovineListComponent;
  let fixture: ComponentFixture<BovineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BovineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BovineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
