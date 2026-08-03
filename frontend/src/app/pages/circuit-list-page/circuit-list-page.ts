import { Component, inject } from '@angular/core';
//servicio inyectado para poder usarlo en el componente
import { CircuitService } from '../../services/circuit';
import { Circuit } from '../../models/circuit.model';
import { CircuitCard } from '../../components/circuit-card/circuit-card';

@Component({
  selector: 'app-circuit-list-page',
  imports: [CircuitCard],
  templateUrl: './circuit-list-page.html',
  styleUrl: './circuit-list-page.css',
})
export class CircuitListPageComponent {

  private readonly circuitService: CircuitService = inject(CircuitService);

  readonly circuits: Circuit[] = this.circuitService.getCircuits();
}
