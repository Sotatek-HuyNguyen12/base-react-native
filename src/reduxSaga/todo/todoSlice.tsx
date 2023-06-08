import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'config/ReduxConfig/store';

const initialState = {
  todo_list: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const {id, task} = action.payload;
      return {
        ...state,
        todo_list: [...state.todo_list, {id, task}],
      };
    },
    deleteTodo: (state, action) => {
      const {id} = action.payload;
      return {
        ...state,
        todo_list: state.todo_list.filter(todo => todo.id !== id),
      };
    },
  },
});

export const todoActions = todoSlice.actions;

export const todoSelector = (state: RootState) => state.todo.todo_list;

const todoReducer = todoSlice.reducer;
export default todoReducer;
