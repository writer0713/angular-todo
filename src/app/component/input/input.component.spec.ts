import { TodoService } from './../../service/todo.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { Todo } from '../../model/todo';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    todoService = TestBed.get(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can add todo', () => {
    spyOn(todoService, 'getTodoList').and.returnValues([new Todo('1'), new Todo('2')]);
    expect(todoService.getTodoList().length).toEqual(2);
    todoService.add(new Todo('3'));
    expect(todoService.getTodoList().length).toEqual(3);

  })
});
