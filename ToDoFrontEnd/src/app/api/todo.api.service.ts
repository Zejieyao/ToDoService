import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private requestUrl: string = 'https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos';
  constructor(
    private httpClient: HttpClient
  ) { }

  // getAll(): Observable<ToDoItem[]> {
  //   return this.httpClient.get<ToDoItem[]>(this.requestUrl);
  // }
  create(todoItem: ToDoItem): Observable<void> {
    return this.httpClient.post<void>(this.requestUrl, todoItem);
  }
}
