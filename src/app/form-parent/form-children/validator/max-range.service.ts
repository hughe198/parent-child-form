import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaxRangeService {

  constructor() { }

  rangeValidator():ValidatorFn{
    return(control:AbstractControl):ValidationErrors | null => {
      const minRangeControl = control.get("minRange");
      const maxRangeControl = control.get("maxRange");
      if (!minRangeControl || !maxRangeControl) {
        return null; // No validation if controls are not found
      }
      const minRange = minRangeControl.value;
      const maxRange = maxRangeControl.value;
      return minRange < maxRange ? null : {rangeInvalid:true}
    }
  }

}
