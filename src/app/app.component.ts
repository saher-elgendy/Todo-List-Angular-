import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [TodoDataService]
})

export class AppComponent {
  //input value
  value: string = '';
  //constructor
  constructor(private todoDataService: TodoDataService) { }
  //using the input value as a todo title of the todo object
  addTodo(title: string) {
    //if no title, no todo
    if (title) this.todoDataService.addTodo(this.value);
    //reset the input value to the placeholder
    this.value = '';
  }
  //removing a certain todo using its 'id' property
  removeTodo(todo) {
    this.todoDataService.removeTodo(todo.id);
  }
  //toggling the 'complete' property in a todo object
  toggleCompletionState(todo) {
    this.todoDataService.toggleCompletionState(todo.id);
  }
  //get all todos
  get todos() {
    return this.todoDataService.getAllTodos();
  }

  arrangeTodos() {
    this.todoDataService.arrangeTodos()
  }
  //get only complete todos
  get completedTodos() {
    return this.todoDataService.getCompletedTodosLength();
  }
}
