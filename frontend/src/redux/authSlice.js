// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   token: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { token, user } = action.payload;
//       state.token = token;
//       state.user = user;
//     },
//     clearCredentials: (state) => {
//       state.token = null;
//       state.user = null;
//     },
//   },
// });

// export const { setCredentials, clearCredentials } = authSlice.actions;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;

// export default authSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage
const savedToken = localStorage.getItem('token');
const savedUser = localStorage.getItem('user');

const initialState = {
  token: savedToken ? JSON.parse(savedToken) : null,
  user: savedUser ? JSON.parse(savedUser) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;

      // Save to localStorage
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;

      // Remove from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;

export default authSlice.reducer;
