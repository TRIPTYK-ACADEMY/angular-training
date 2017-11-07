import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuNgmodelComponent } from './sku-ngmodel.component';

describe('SkuNgmodelComponent', () => {
  let component: SkuNgmodelComponent;
  let fixture: ComponentFixture<SkuNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
