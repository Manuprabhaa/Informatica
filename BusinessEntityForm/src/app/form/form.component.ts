import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { EntityControlService } from '../entity-control.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() data: {};
  @Input() fields: {};
  form: FormGroup;
  originalFormData = {};

  constructor(private service: EntityControlService) { }

  ngOnInit(): void {
    this.form = this.service.createFormGroup(this.fields, this.data);
    this.form.valueChanges.subscribe(next => {
      console.log(next);
    });
    this.originalFormData = this.setEmptyValueToNull(this.form.getRawValue());
  }

  onSubmit() {
    let finalData = this.form.getRawValue();
    let originalData: {};
    Object.keys(this.form.controls).forEach(key => {
      if (this.form.get(key).dirty) {
        originalData[key] = this.originalFormData[key];
      }
    });
    finalData.$original = originalData; 
    
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem("result", JSON.stringify(this.setEmptyValueToNull(finalData)));
    }
  }

  setEmptyValueToNull(obj: {}): {} {
    for (const [key, value] of Object.entries(obj)) {
      if (value === '') {
        obj[key] = null;
      }
    }
    return obj;
  }
}
