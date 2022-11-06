import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '0',
    name: 'Kamil Ertekin',
  },
  {
    id: '1',
    name: 'Latif Ertekin',
  },
  {
    id: '2',
    name: 'Feyza Ertekin',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
