import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms'
import {Todo} from "../model/todo";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoInput!: FormGroup; // Bound to user input fields in component
  todoObj : Todo = new Todo();
  todoList: Todo[] = [];

  constructor(private formBuilder: FormBuilder, private todoService : TodoService) { }

  ngOnInit(): void {
    this.getAllTodos();
    this.todoInput = this.formBuilder.group({
      id: [''],
      name: [''],
      content: [''],
      done: ['']
    });
  }

  addTodo() {
    console.log(this.todoInput);
    this.todoObj.name = this.todoInput.value.name
    this.todoObj.content = this.todoInput.value.content;
    if (this.todoInput.value.done) {
      this.todoObj.done = true;
    } else {
      this.todoObj.done = false;
    }
    this.todoService.addTodo(this.todoObj).subscribe(res=> {
        console.log('POST request successful')
        console.log(res);
        this.getAllTodos(); // fetch all data after adding data
    }, error => {
        console.log(error);
    })
    this.clear();
  }

  clear() {
    this.todoInput.controls['id'].setValue('');
    this.todoInput.controls['name'].setValue('');
    this.todoInput.controls['content'].setValue('');
    this.todoInput.controls['done'].setValue('');
    this.todoObj.id = 0;
  }

  editTodo(todo: Todo) {
    this.todoInput.controls['id'].setValue(todo.id);
    this.todoInput.controls['name'].setValue(todo.name);
    this.todoInput.controls['content'].setValue(todo.content);
    this.todoInput.controls['done'].setValue(todo.done);
  }

  updateTodo() {
    this.todoObj.id = this.todoInput.value.id;
    this.todoObj.name = this.todoInput.value.name;
    this.todoObj.content = this.todoInput.value.content;
    if (this.todoInput.value.done) {
      this.todoObj.done = true;
    } else {
      this.todoObj.done = false;
    }

    this.todoService.updateTodo(this.todoObj).subscribe(res => {
      console.log("PUT request successful");
      console.log(res);
      this.getAllTodos();
    }, err => {
      console.log(err)
    })
    this.clear();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(res => {
      console.log(res);
      this.getAllTodos();
    }, error => console.log(error));
  }

  getAllTodos() {
    this.todoService.getAllTodos().subscribe(res => {
        console.log("GET all request successful");
        console.log(res);
        this.todoList = res;
    }, err=> {
        console.log(err);
    });
  }

}
