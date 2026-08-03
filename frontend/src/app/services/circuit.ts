import { Injectable } from '@angular/core';
import { Circuit } from '../models/circuit.model';

@Injectable({
  providedIn: 'root',
})
export class CircuitService {

  private circuits: Circuit[] = [
    {
      id: 1,
      name: 'Circuit de Monaco',
      location: 'Monte Carlo, Mónaco',
      length: 3.337,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Circuit_de_Monaco_2004-2014.png',
      description: 'El Circuito de Mónaco es un circuito urbano que se celebra en las calles de Monte Carlo y La Condamine, alrededor del puerto de Mónaco. Es uno de los circuitos más famosos y prestigiosos del mundo, conocido por su glamour y su dificultad técnica.',
    },
    {
      id: 2,
      name: 'Circuit de Spa-Francorchamps',
      location: 'Stavelot, Bélgica',
      length: 7.004,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Circuit_de_Spa-Francorchamps_2004-2006.png',
      description: 'El Circuito de Spa-Francorchamps es un circuito de carreras ubicado en las Ardenas belgas. Es famoso por su trazado rápido y desafiante, con curvas icónicas como Eau Rouge y Raidillon. Es considerado uno de los circuitos más emocionantes y exigentes del mundo.',
    },
    {
      id: 3,
      name: 'Circuit de Silverstone',
      location: 'Silverstone, Reino Unido',
      length: 5.891,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Circuit_Silverstone_2011.svg',
      description: 'El Circuito de Silverstone es un circuito de carreras ubicado en Northamptonshire, Inglaterra. Es conocido por ser el hogar del Gran Premio de Gran Bretaña de Fórmula 1 y por su historia en el automovilismo. El trazado combina curvas rápidas y técnicas, lo que lo convierte en un desafío para los pilotos.',
    },
  ];

  //Método que devuelve un array tipo Circuit basado en el array circuits de la lista de circuitos
  getCircuits(): Circuit[] {
    return [...this.circuits];
  }
}
