import { Injectable } from '@angular/core';
import { CircuitLayout } from '../models/circuit-layout.model';

@Injectable({
  providedIn: 'root',
})
export class CircuitLayoutService {

  private readonly circuitLayouts: CircuitLayout[] = [
    {
      id: 'monaco-main',
      circuitId: 1,
      name: 'Normal Layout',
      viewBox: '0 0 800 500',
      trackPath: 'M 100 100 L 300 100 L 300 300 L 100 300 Z',
    }
  ];

  getCircuitLayoutById(id: string): CircuitLayout | undefined {
    const result = this.circuitLayouts.find(layout => layout.id === id);
    return result ? { ...result } : undefined;
  }

}


