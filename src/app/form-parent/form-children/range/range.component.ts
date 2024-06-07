import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-range',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss'
})
export class RangeComponent {

@Input() min = 0
@Input() max = 100
@Input() value: number = 50
@Output() newValue = new EventEmitter<number>()


emitValue(){
  this.newValue.emit(this.value)
}



}
