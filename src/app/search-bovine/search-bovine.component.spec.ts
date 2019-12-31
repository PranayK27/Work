import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBovineComponent } from './search-bovine.component';

describe('SearchBovineComponent', () => {
  let component: SearchBovineComponent;
  let fixture: ComponentFixture<SearchBovineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBovineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
