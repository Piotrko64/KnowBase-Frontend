import { Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'shared-basic-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic-input.component.html',
  styleUrl: './basic-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInputComponent),
      multi: true,
    },
  ],
})
export class BasicInputComponent implements ControlValueAccessor {
  public label = input.required();
  public placeholder = input('');
  public type = input('text');

  protected randomId = 'id-' + Math.random().toFixed(4);

  value: string;
  onChange: any = () => {};
  onTouch: any = () => {};

  set valueInput(val: string) {
    if (val !== undefined && this.value !== val) {
      this.value = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(x: any) {
    this.valueInput = x;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
