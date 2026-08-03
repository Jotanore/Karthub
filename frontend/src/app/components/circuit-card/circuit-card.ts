import { Component, input } from '@angular/core';
import { Circuit } from '../../models/circuit.model';

@Component({
  selector: 'app-circuit-card',
  imports: [],
  templateUrl: './circuit-card.html',
  styleUrl: './circuit-card.css',
})
export class CircuitCard {

  /*este circuit es el que se pasa desde el componente padre, en este caso circuit-list-page en [circuit]="circuit"
  Se corresponde a [circuit], mientras que "circuit" es la iteración actual de
  @for (circuit of circuits; track circuit.id)
   */
  circuit = input.required<Circuit>();
}
