import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}


@Component({
  selector: 'app-sku-change',
  templateUrl: './sku-change.component.html',
  styleUrls: ['./sku-change.component.css']
})
export class SkuChangeComponent implements OnInit {

 myForm: FormGroup;
  sku:AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {'sku': ['',Validators.compose([
        Validators.required, skuValidator])]
    });
    this.sku  = this.myForm.controls['sku']
    this.sku.valueChanges.subscribe(
      (value:string)=>{
        console.log("sku change with value : "+value);
      }
    )
    this.myForm.valueChanges.subscribe(
      (form:any)=>{
        console.log("myForm change with form : ",form);
      }
    )
  }
  onSubmit(value: string): void {
    console.log('you have submited :', value);
  }

  ngOnInit() {
  }

}
