import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      
      <input 
        type="checkbox"
        class="todo-checkbox"
        (click)="completeItem()"/>
      
      <p class="todo-title" [ngClass]="{'todo-complete': item.completed}">
        {{ item.title }}
      </p>
      
      <button class="btn btn-red" (click)="removeItem()">
        remover
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 
  @Input() item!: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  removeItem() {
    this.remove.emit(this.item)
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
}
