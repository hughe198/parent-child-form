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
        return null; 
      }

      const minRange = minRangeControl.value;
      const maxRange = maxRangeControl.value;

      if (minRange < 0 || maxRange > 100 || minRange == maxRange) {
        return { rangeInvalid: true };
      }
      return minRange < maxRange ? null : {rangeInvalid:true}
    }
  }

}
