import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: state => {
      state.isLoggedIn = true;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice;
