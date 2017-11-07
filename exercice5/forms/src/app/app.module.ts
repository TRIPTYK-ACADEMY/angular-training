import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkuComponentComponent } from './sku-component/sku-component.component';
import { SkuReactiveComponent } from './sku-reactive/sku-reactive.component';
import { SkuChangeComponent } from './sku-change/sku-change.component';
import { SkuNgmodelComponent } from './sku-ngmodel/sku-ngmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuComponentComponent,
    SkuReactiveComponent,
    SkuChangeComponent,
    SkuNgmodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
