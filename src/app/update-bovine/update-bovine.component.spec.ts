import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBovineComponent } from './update-bovine.component';

describe('UpdateBovineComponent', () => {
  let component: UpdateBovineComponent;
  let fixture: ComponentFixture<UpdateBovineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBovineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
