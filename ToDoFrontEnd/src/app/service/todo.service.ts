import { Injectable } from '@angular/core';
import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public errorMessage?: string;
  private _selectedTodoItem: ToDoItem = {} as ToDoItem;
  private _updatingTodoItem: ToDoItem = {} as ToDoItem;
  public todoItems: ToDoItem[] = [];
  constructor(
    private todoStore: TodoStoreService,
    private todoApiService: TodoApiService
  ) {
  }

  // public getAll(): void {
  //   this.todoApiService.getAll().subscribe(res => {
  //     this.todoItems = res
  //   });
  // }

  public create(todoItem: ToDoItem): void {
    this.todoApiService.create(todoItem);
  }

  public update(updateTodoItem: ToDoItem): void {
    this.todoStore.update(updateTodoItem);
  }

  public delete(id: number): void {
    this.todoStore.delete(id);
  }

  public findById(id: number): ToDoItem {
    return this.todoStore.findById(id);
  }

  // public selectTodoItem(id: number): void {
  //   this._selectedTodoItem = this.todoStore.findById(id);
  // }

  // public selectTodoItemForUpdate(id: number): void {
  //   this._updatingTodoItem = Object.assign({}, this.todoStore.findById(id));
  // }

  // public currentTodoItem(): ToDoItem {
  //   return this._selectedTodoItem;
  // }

  // public currentUpdatingTodoItem(): ToDoItem {
  //   return this._updatingTodoItem;
  // }
}
