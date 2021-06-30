import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFountShopComponent } from './not-fount-shop.component';

describe('NotFountShopComponent', () => {
  let component: NotFountShopComponent;
  let fixture: ComponentFixture<NotFountShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFountShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFountShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
