import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOnCssComponent } from './menu-on-css.component';

describe('MenuOnCssComponent', () => {
  let component: MenuOnCssComponent;
  let fixture: ComponentFixture<MenuOnCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOnCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOnCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
