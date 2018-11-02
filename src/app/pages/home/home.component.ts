import {Component, Injectable, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo/todo.service';
import {Todo} from '../../services/todo/todo';

@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todo: Todo [] = [] ;
  todos: any;
  description: any;
  value = '';
  constructor(public todoService: TodoService) {


     this.todoService.getTodos().then( (e) =>{ this.todos =e;});
  }

  onEnter(value: string) { this.value = value; }
  onAddTodo(value : string){
    this.todo.push({'description' : value });
    this.todoService.addTodo(this.todo);
    this.todoService.getTodos().then( (e) =>{ this.todos =e;});
  }
  ngOnInit() {

  }


}
