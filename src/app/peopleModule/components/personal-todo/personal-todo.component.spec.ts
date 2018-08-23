import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonalTodoComponent } from "./personal-todo.component";

describe("PersonalTodoComponent", () => {
  let component: PersonalTodoComponent;
  let fixture: ComponentFixture<PersonalTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalTodoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
