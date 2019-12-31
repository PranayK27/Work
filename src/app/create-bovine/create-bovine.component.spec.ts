import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBovineComponent } from './create-bovine.component';

describe('CreateBovineComponent', () => {
  let component: CreateBovineComponent;
  let fixture: ComponentFixture<CreateBovineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBovineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
