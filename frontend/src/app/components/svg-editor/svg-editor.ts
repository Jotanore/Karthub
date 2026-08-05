import { Component, input } from '@angular/core';
import { CircuitLayout } from '../../models/circuit-layout.model';

@Component({
  selector: 'app-svg-editor',
  imports: [],
  templateUrl: './svg-editor.html',
  styleUrl: './svg-editor.css',
})
export class SvgEditor {

  readonly layout = input.required<CircuitLayout>();

}
