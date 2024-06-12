import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemlistPage } from './itemlist.page';

describe('ItemlistPage', () => {
  let component: ItemlistPage;
  let fixture: ComponentFixture<ItemlistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
