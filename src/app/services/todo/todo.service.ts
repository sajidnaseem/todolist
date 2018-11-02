import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {HomeModule} from '../../pages/home/home.module';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {

}
   addTodo(todo: Todo){
     this.todos =[];
     for(let i = 0; i < todo.length; i++) {
       this.todos.push(todo[i]);
     }
  }
   getTodos(): Promise<Todo[]> {
    return Promise.resolve(this.todos); // TODO: get hero data from the server;
  }
}
