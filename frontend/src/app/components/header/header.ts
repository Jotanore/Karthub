import { Component } from '@angular/core';
//RouterLink permite usar enlaces sin recargar en Angular
//RouterLinkActive permite saber si la ruta actual es la misma que la del enlace y así poder aplicar estilos condicionales
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }
