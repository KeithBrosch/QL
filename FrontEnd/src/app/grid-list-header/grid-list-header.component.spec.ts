import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListHeaderComponent } from './grid-list-header.component';

describe('GridListHeaderComponent', () => {
  let component: GridListHeaderComponent;
  let fixture: ComponentFixture<GridListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
