import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `    
    
    <input 
      class="todo-input"
      #inputElementRef
      [placeholder]="title" 
      (keyup.enter)="submitValue2($event)">
    
    <button 
      class="btn"
      (click)="submitValue(inputElementRef.value)">
      Adicionar
    </button>

  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  
  title = "Tarefa";

  constructor() {}

  ngOnInit() {}

  submitValue2(event: any) {
    this.submit.emit(event.target.value);
    event.target.value = "";   
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}