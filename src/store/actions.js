import { types } from "./types";

export const setUser = (name) => {
  return {
    type: types.setUser,
    payload: {
      name: name,
    },
  };
};

export const addTodo = (todo) => {
  return {
    type: types.addTodo,
    payload: {
      todo: todo,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: types.removeTodo,
    payload: {
      id: id,
    },
  };
};

export const updateTodo = (value, id) => {
  return {
    type: types.updateTodo,
    payload: {
      newValue: value,
      id: id,
    },
  };
};

export const toggleCompletion = (id) => {
  return {
    type: types.toggleCompletion,
    payload: {
      id: id,
    },
  };
};
