import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlItemsComponent } from './url-items.component';

describe('UrlItemsComponent', () => {
  let component: UrlItemsComponent;
  let fixture: ComponentFixture<UrlItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
