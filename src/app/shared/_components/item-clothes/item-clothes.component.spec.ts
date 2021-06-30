import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClothesComponent } from './item-clothes.component';

describe('ItemClothesComponent', () => {
  let component: ItemClothesComponent;
  let fixture: ComponentFixture<ItemClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
