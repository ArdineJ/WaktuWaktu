import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string;
  editMode: boolean = false;
  editTodoIndex: number;

  ngOnInit() {
    this.loadTodosFromLocalStorage();
  }

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
      this.saveTodosToLocalStorage();
    } else {
      alert('Please Enter Todo');
    }
  }

  edit(index: number) {
    this.editMode = true;
    this.newTodo = this.todos[index].name;
  }

  startEdit(id: number) {
    this.editTodoIndex = id;
    this.newTodo = this.todos[id].name;
    this.editMode = true;
  }



  updateTodo() {
    if (this.newTodo) {
      this.todos[this.editTodoIndex].name = this.newTodo;
      this.newTodo = '';
      this.editMode = false;
      this.saveTodosToLocalStorage();
    } else {
      alert('Please Enter Todo');
    }
  }

  cancelEdit() {
    this.newTodo = '';
    this.editMode = false;
  }


  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
    this.saveTodosToLocalStorage();
  }

  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.saveTodosToLocalStorage();
  }

  saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodosFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }
}

