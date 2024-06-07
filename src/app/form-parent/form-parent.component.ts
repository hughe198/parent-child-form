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
    minRange: new FormControl(25),
    maxRange: new FormControl(75)
  },{validators:this.rangeService.rangeValidator()})

}
  ngOnInit(): void {
    this.form.valueChanges.subscribe(values =>{
      if (this.form.errors?.['rangeInvalid']){
        const maxRange = this.form.get('maxRange')?.value
        this.form.get('minRange')?.setValue(maxRange -1,{emitEvent:false})
      }
    })
  }

  onMinRangeChange(value:number){
    this.form.get('minRange')?.setValue(value)
  }
  
  onMaxRangeChange(value:number){
    this.form.get('maxRange')?.setValue(value)
  }


}
