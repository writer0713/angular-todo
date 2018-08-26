import { Todo } from "../../shared/model/todo";
import { tassign } from "tassign";
import { TodoActions, TodoAction } from "../actions/todo.action";

export interface ITodoState {
  todos: Todo[];
}

export const TODO_INITIAL_STATE: ITodoState = {
  todos: []
};

export function todoReducer(
  state: ITodoState = TODO_INITIAL_STATE,
  action: TodoAction
): ITodoState {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return addTodo(state, action);

    case TodoActions.REMOVE_TODO:
      return removeTodo(state, action);

    default:
      return state;
  }
}

function addTodo(state: ITodoState, action: TodoAction) {
  const newTodo = new Todo(action.title);
  return tassign(state, {
    todos: state.todos.concat(newTodo)
  });
}

function removeTodo(state: ITodoState, action: TodoAction) {
  return tassign(state, {
    todos: state.todos.filter(t => t.title !== action.title)
  });
}
