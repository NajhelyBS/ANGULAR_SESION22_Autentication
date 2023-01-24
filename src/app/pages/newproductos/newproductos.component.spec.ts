import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductosComponent } from './newproductos.component';

describe('NewproductosComponent', () => {
  let component: NewproductosComponent;
  let fixture: ComponentFixture<NewproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
