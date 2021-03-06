// Desenvolvido seguindo o Tutorial: https://ng-girls.gitbook.io/todo-list-tutorial-portuguese/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  template: `
  <h1 class="app-title">
    {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
  `,  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Atividades';
}