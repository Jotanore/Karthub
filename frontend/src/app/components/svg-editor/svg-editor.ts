import { Component, input, output, computed } from '@angular/core';
import { CircuitLayout } from '../../models/circuit-layout.model';
import { RacingLinePoint } from '../../models/racing-line-point.model';
import { EditorTool } from '../../models/editor-tool.model';
import { PointCoordinates } from '../../models/point-coordinates.model';

@Component({
  selector: 'app-svg-editor',
  imports: [],
  templateUrl: './svg-editor.html',
  styleUrl: './svg-editor.css',
})
export class SvgEditor {

  readonly layout = input.required<CircuitLayout>();
  readonly points = input.required<readonly RacingLinePoint[]>();
  readonly activeTool = input.required<EditorTool>();
  readonly selectedPointId = input.required<string | null>();

  readonly pointCreated = output<PointCoordinates>();

  readonly polylinePoints = computed(() => {
    const orderedPoints = [...this.points()].sort((firstPoint, secondPoint) => firstPoint.order - secondPoint.order);

    return orderedPoints.map(point => `${point.x},${point.y}`).join(' ');
  });

  onSvgPointerDown(event: PointerEvent): void {
    if (this.activeTool() !== 'ADD_POINT') {
      return;
    }

    const svgElement = event.currentTarget as SVGSVGElement;
    const screenMatrix = svgElement.getScreenCTM();
    if (!screenMatrix) {
      console.error('Failed to get screen CTM for SVG element.');
      return;
    }
    const svgPoint = svgElement.createSVGPoint();
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;

    const transformedPoint = svgPoint.matrixTransform(screenMatrix.inverse());

    this.pointCreated.emit({ x: transformedPoint.x, y: transformedPoint.y });


  }
}
