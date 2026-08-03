import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//importar el ts del header para poder usarlo y añadirlo a imports
import { Header } from './components/header/header'

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
