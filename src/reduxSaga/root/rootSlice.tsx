import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'config/ReduxConfig/store';

const initialState = {
  isLoading: false,
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    displayLoading: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    hideLoading: state => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const rootActions = rootSlice.actions;

export const rootSelector = (state: RootState) => state.root;

const rootReducer = rootSlice.reducer;
export default rootReducer;
