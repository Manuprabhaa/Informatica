import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EntityControlService {

  constructor() { }

  createFormGroup(fields: {}, data: {}) {
    const group: any = {};

    group[fields["name"]] = new FormControl(fields["label"]);
    fields["field"].forEach(element => {
      var value = '';
      for (const dataKey in data) {
        if (element["name"] === dataKey) {
          value = data[dataKey];
        }
      }
      if (!element["system"] || element["system"] === false) {
        group[element["name"]] = new FormControl(value);
        if (element["required"]) {
          group[element["name"]].setValidators(Validators.required);
        }
        if (element["length"]) {
          group[element["name"]].setValidators( group[element["name"]].Validator ? 
                                                [group[element["name"]].Validator, Validators.min(0), Validators.max(element['length'])] :
                                                [Validators.min(0), Validators.max(element['length'])]);
        }
        if (element["readonly"]) {
          group[element["name"]].disable = true;
        }
      }
    });

    return new FormGroup(group);
  }
}
