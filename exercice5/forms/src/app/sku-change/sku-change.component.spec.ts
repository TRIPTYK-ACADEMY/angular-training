import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuChangeComponent } from './sku-change.component';

describe('SkuChangeComponent', () => {
  let component: SkuChangeComponent;
  let fixture: ComponentFixture<SkuChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
