import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const getInitialTask = () => {
  // getting todo list
  const localTaskList = window.localStorage.getItem("taskList");
  // if todo list is not empty
  if (localTaskList) {
    return JSON.parse(localTaskList);
  }
  window.localStorage.setItem("taskList", []);
  return [];
};

const initialState = {
  taskList: getInitialTask(),
};

const taskReducer = createReducer(initialState, {
  CREATE_TASK: (state, action) => {
    const { values } = action.payload;
    const newTask = {
      id: uuidv4(),
      ...values,
    };
    return {
      ...state,
      taskList: [newTask, ...state.taskList],
    };
  },
  UPDATE_TASK: (state, action) => {
    const { id, values } = action.payload;
    const newTaskList = [...state.taskList];
    const newTask = {
      ...values,
      id: id,
    };
    const index = state.taskList.findIndex((item) => item.id === id);
    newTaskList.splice(index, 1, newTask);
    return {
      ...state,
      taskList: newTaskList,
    };
  },
  DELETE_TASK: (state, action) => {
    const { id } = action.payload;
    const newTaskList = state.taskList.filter((item) => item.id !== id);
    return {
      ...state,
      taskList: newTaskList,
    };
  },
});

export default taskReducer;
