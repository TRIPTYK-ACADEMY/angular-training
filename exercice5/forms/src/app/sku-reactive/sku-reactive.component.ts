import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}
@Component({
  selector: 'app-sku-reactive',
  templateUrl: './sku-reactive.component.html',
  styleUrls: ['./sku-reactive.component.css']
})
export class SkuReactiveComponent implements OnInit {
  myForm: FormGroup;
  sku:AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {'sku': ['',Validators.compose([
        Validators.required, skuValidator])]
    });
    this.sku  = this.myForm.controls['sku']
  }
  onSubmit(value: string): void {
    console.log('you have submited :', value);
  }
  ngOnInit() {
  }

}
