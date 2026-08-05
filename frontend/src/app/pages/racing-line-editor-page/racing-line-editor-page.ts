import { Component, signal, inject } from '@angular/core';
import { EditorTool } from '../../models/editor-tool.model';
import { RacingLinePoint } from '../../models/racing-line-point.model';
import { EditorToolbar } from '../../components/editor-toolbar/editor-toolbar';
import { ActivatedRoute } from "@angular/router";
import { CircuitLayoutService } from "../../services/circuit-layout";
import { CircuitLayout } from "../../models/circuit-layout.model";
import { SvgEditor } from "../../components/svg-editor/svg-editor";
import { PointCoordinates } from "../../models/point-coordinates.model";

@Component({
  selector: 'app-racing-line-editor-page',
  imports: [EditorToolbar, SvgEditor],
  templateUrl: './racing-line-editor-page.html',
  styleUrl: './racing-line-editor-page.css',
})
export class RacingLineEditorPageComponent {

  //Esto es una señal readonly que evita reemplazarla. Su contenido esta limitado por el tipo EditorTool, que es un tipo de union de strings. Esto significa que solo puede contener uno de los valores especificados en el tipo EditorTool. El valor por defecto es SELECT.
  readonly selectedTool = signal<EditorTool>('SELECT');

  //Esto es una señal readonly que evita reemplazarla. Su contenido esta limitado por el tipo RacingLinePoint[], que es un array de objetos RacingLinePoint. Esto significa que solo puede contener un array de objetos que cumplan con la interfaz RacingLinePoint. El valor por defecto es un array vacio.
  readonly points = signal<RacingLinePoint[]>([]);

  //Esto es una señal readonly que evita reemplazarla. Su contenido esta limitado por el tipo string | null, que significa que puede contener un string o null. El valor por defecto es null.
  readonly selectedPointId = signal<string | null>(null);

  private readonly route = inject(ActivatedRoute);
  private readonly circuitLayoutService = inject(CircuitLayoutService);

  readonly layoutId = this.route.snapshot.paramMap.get('layoutId');

  readonly layout = signal<CircuitLayout | undefined>(this.layoutId ? this.circuitLayoutService.getCircuitLayoutById(this.layoutId) : undefined);

  toolUpdate(tool: EditorTool): void {
    this.selectedTool.set(tool);
  }

  onPointCreated(coordinates: PointCoordinates): void {
    const id = crypto.randomUUID();
    const order = this.points().length + 1;
    const newPoint: RacingLinePoint = {
      id: id,
      order: order,
      x: coordinates.x,
      y: coordinates.y
    };

    this.points.update(points => [...points, newPoint]);
    this.selectedPointId.set(newPoint.id);
  }




}

