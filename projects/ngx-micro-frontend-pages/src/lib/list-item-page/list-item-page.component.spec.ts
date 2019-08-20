import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemPageComponent } from './list-item-page.component';

describe('ListItemPageComponent', () => {
  let component: ListItemPageComponent;
  let fixture: ComponentFixture<ListItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
