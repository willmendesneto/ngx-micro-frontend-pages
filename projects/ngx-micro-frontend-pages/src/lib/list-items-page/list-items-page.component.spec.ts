import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsPageComponent } from './list-items-page.component';

describe('ListItemsPageComponent', () => {
  let component: ListItemsPageComponent;
  let fixture: ComponentFixture<ListItemsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
