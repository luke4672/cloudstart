import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  backendURL: string;

  constructor(private http: HttpClient) {

    //this.backendURL = 'http://localhost:8080/starterproject_cloud_war/api/todo'; //falls tomcat lokal läuft
    this.backendURL = 'http://localhost:8080/backend/api/todo';
    //this.backendURL = 'http://localhost/api/todo'; wenn man nginx benutzt
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.backendURL, todo);
  }

  getSingleTodo(id: number): Observable<Todo> {
    let url = this.backendURL + "/" + id;
    return this.http.get<Todo>(url);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.backendURL);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    let url = this.backendURL + "/" + todo.id;
    return this.http.put<Todo>(url, todo)
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    let url = this.backendURL + "/" + todo.id;
    return this.http.delete<Todo>(url);
  }

}
