import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'config/ReduxConfig/store';

const initialState = {
  userList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: () => {},
    getUsersSuccess: (state, action) => {
      return {
        ...state,
        userList: action.payload,
      };
    },
  },
});

export const userActions = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

const userReducer = userSlice.reducer;
export default userReducer;
