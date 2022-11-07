import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';
import { TodoService } from './todo.service';

describe('TodoService', () => {


  let service: TodoService;
  let todoStoreService: TodoStoreService;
  let httpClient: any;
  let httpClienSpy: any;

  beforeEach(() => {
    httpClienSpy = jasmine.createSpyObj('HttpClient', ['post'])
    todoStoreService = new TodoStoreService();
    TestBed.configureTestingModule({
      providers: [
        TodoApiService,
        { provide: HttpClient, useValue: httpClienSpy }
      ]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create todoItem via mockHttp post', () => { 
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    
    // when
    httpClienSpy.post.and.returnValue(of({}));
    service.create(todoItem);
    // then
    expect(httpClienSpy.post).toHaveBeenCalledWith(
      'https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos', todoItem)

  })

  it('should response error when create failed', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClienSpy.post.and.returnValue(throwError(() =>
      ({ errorMessage: 'create failed' })
    ));

    // when
    service.create(todoItem);

    // then
    expect(service.errorMessage).toEqual('create failed');

  })
});
