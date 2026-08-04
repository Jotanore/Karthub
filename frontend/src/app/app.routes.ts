import { Routes } from '@angular/router';

export const routes: Routes = [

  /*

  Una ruta se compone de un path y un componente que se carga cuando se accede a esa ruta. path indica la ruta que se debe acceder y loadComponent es una función que devuelve una promesa que resuelve el componente que se debe cargar. Import() carga el modulo usando una ruta y luego .then() resuelve la promesa cargando el modulo haciendo modulo => modulo.NombreDelComponente que es la clase que se exporta en el .ts del componente

  {
    path: '',
    loadComponent: ('ruta') =>
      import().then(),
  },

  */

  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then(
        (module) => module.HomePageComponent,
      ),
  },
  {
    path: 'circuits',
    loadComponent: () =>
      import('./pages/circuit-list-page/circuit-list-page').then(
        (module) => module.CircuitListPageComponent,
      ),
  },
  {
    path: 'editor',
    redirectTo: 'editor/monaco-main',
    pathMatch: 'full',
  },
  {
    path: 'editor/:layoutId',
    loadComponent: () =>
      import('./pages/racing-line-editor-page/racing-line-editor-page').then(
        (module) => module.RacingLineEditorPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
