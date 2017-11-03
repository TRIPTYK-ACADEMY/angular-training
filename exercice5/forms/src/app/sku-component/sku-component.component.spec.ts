import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuComponentComponent } from './sku-component.component';

describe('SkuComponentComponent', () => {
  let component: SkuComponentComponent;
  let fixture: ComponentFixture<SkuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
