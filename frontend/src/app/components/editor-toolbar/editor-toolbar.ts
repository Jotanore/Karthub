import { Component, input, output } from '@angular/core';
import { EditorTool } from '../../models/editor-tool.model';

@Component({
  selector: 'app-editor-toolbar',
  imports: [],
  templateUrl: './editor-toolbar.html',
  styleUrl: './editor-toolbar.css',
})
export class EditorToolbar {

  readonly activeTool = input.required<EditorTool>();

  readonly toolSelected = output<EditorTool>();

  selectTool(tool: EditorTool): void {
    this.toolSelected.emit(tool);
  }
}
