import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentProductsComponent } from './managment-products.component';

describe('ManagmentProductsComponent', () => {
  let component: ManagmentProductsComponent;
  let fixture: ComponentFixture<ManagmentProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagmentProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
