import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() 
  addField = new EventEmitter();

  addInput(value: string) {
    this.addField.emit(value);
  }
}