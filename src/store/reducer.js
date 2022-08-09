import { types } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case types.setUser: {
      return { ...state, name: action.payload.name };
    }

    case types.addTodo: {
      return { ...state, toDoList: [...state.toDoList, action.payload.todo] };
    }

    case types.removeTodo: {
      const newToDoList = state.toDoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, toDoList: newToDoList };
    }

    case types.updateTodo: {
      const newToDoList = state.toDoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.todo = action.payload.newValue;
        }
        return todo;
      });
      return { ...state, toDoList: newToDoList };
    }

    case types.toggleCompletion: {
      const newToDoList = state.toDoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { ...state, toDoList: newToDoList };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
