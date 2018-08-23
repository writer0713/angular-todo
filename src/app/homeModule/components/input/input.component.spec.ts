import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InputComponent } from "./input.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { TodoService } from "../../../shared/services/todo.service";
import { Todo } from "../../../shared/model/todo";

class MockTodoService extends TodoService {
  getTodoList() {
    return [new Todo("1"), new Todo("2")];
  }
}

describe("InputComponent", () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let todoService: TodoService;

  let input: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      providers: [
        TodoService
        //{provide: TodoService, useClass: MockTodoService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    todoService = TestBed.get(TodoService);

    input = fixture.debugElement.query(By.css("input"));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("can add todo", () => {
    spyOn(todoService, "getTodoList").and.returnValues([
      new Todo("1"),
      new Todo("2")
    ]);

    const length1 = todoService.getTodoList().length;
    expect(length1).toEqual(2);
  });

  xit("mock Service DI", () => {
    console.log("mock Todo Service : ", todoService.getTodoList());
    expect(todoService.getTodoList().length).toBe(2);
  });
});
