import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  todos: Todo[] = [];
  id: number = 0;

  addTodo(value): TodoDataService {
    //using the input value as a todo title and adding the new todo at the top
    this.todos = [{title: value, id: this.id++, completed: false}, ...this.todos];
    return this;
  }
  //remove todo depending on 'id'
  removeTodo(id:number): TodoDataService{
   this.todos = this.todos.filter(todo => todo.id !== id);
   return this;
  }
  //toggling the 'complete' property value
  toggleCompletionState(id:number) :TodoDataService{
     this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
     return this;
  }
  //get all todos
  getAllTodos() {
    return this.todos;
  }
  //arrange the array of todos
  arrangeTodos(): TodoDataService {
    let remainingTodos: Todo[];
    let CompletedTodos: Todo[];
    //creating an array of remainign todos
    remainingTodos = this.todos.filter(todo => !todo.completed);
    //creating an array of completed todos
    CompletedTodos = this.todos.filter(todo => todo.completed);
    //concating the two arrays
    this.todos = [...remainingTodos, ...CompletedTodos];
    return this;
  }

  //get completed todos
  getCompletedTodosLength() {
    let length: number = 0;
    return this.todos.reduce((prev, curr) => curr.completed ? ++length : length, 0);
  }

}
