import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuReactiveComponent } from './sku-reactive.component';

describe('SkuReactiveComponent', () => {
  let component: SkuReactiveComponent;
  let fixture: ComponentFixture<SkuReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
