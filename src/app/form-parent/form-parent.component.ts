import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MaxRangeService } from './form-children/validator/max-range.service';
import { RangeComponent } from './form-children/range/range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-parent',
  standalone: true,
  imports: [FormsModule, RangeComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './form-parent.component.html',
  styleUrl: './form-parent.component.scss'
})
export class FormParentComponent implements OnInit {

form:FormGroup

constructor(private rangeService: MaxRangeService){
  this.form = new FormGroup({
    minTitle: new FormControl("Min Range"),
    minRange: new FormControl(25),
    maxTitle: new FormControl("Max Range"),
    maxRange: new FormControl(75),
    min: new FormControl(0),
    max: new FormControl(100)
    
  },{validators:this.rangeService.rangeValidator()})

}
ngOnInit(): void {
  this.form.valueChanges.subscribe(() => {
    if (this.form.errors?.['rangeInvalid']) {
      this.correctRangeValues();
    }
  });
}



  correctRangeValues(){
    const minRangeControl = this.form.get('minRange');
    const maxRangeControl = this.form.get('maxRange');
    const minControl = this.form.get('min');
    const maxControl = this.form.get('max');

    if (!minRangeControl || !maxRangeControl || !minControl || !maxControl) {
      return;
    }
    
    const minRange = minRangeControl.value;
    const maxRange = maxRangeControl.value;
    const min = minControl.value;
    const max = maxControl.value;
    
    if (minRange >= maxRange) {
      minRangeControl.setValue(maxRange - 1, { emitEvent: true });
    }

    if (maxRange <= minRange) {
      maxRangeControl.setValue(minRange + 1, { emitEvent: true });
    }

    if (minRange <= min) {
      minRangeControl.setValue(min, { emitEvent: true });
    }

    if (maxRange > max) {
      maxRangeControl.setValue(max, { emitEvent: false });
    }
  }

  onMinRangeChange(value:number){
    this.form.get('minRange')?.setValue(value)
  }
  
  onMaxRangeChange(value:number){
    this.form.get('maxRange')?.setValue(value)
  }


}
