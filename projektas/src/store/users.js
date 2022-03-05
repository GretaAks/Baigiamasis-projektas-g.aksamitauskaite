import {createSlice} from  '@reduxjs/toolkit';
import { v4 as createId } from 'uuid';

const initialState = {
    collection: [],
};

const userSlice = createSlice ({
    name: 'users',
    initialState,
    reducer: {
        loadUsers (state, {payload}) {
            state.collection = payload.users;
        },
        addUsers (state, {payload}) {
            const newUser = {
                id: createId(),
                ...payload,

            }
            state.collection.push(newUser);
    },
    deleteUser(state, { payload }) {
        const userToDeleteIndex = state.collection.findIndex((u) => u.id === payload.id);
        state.collection.splice(userToDeleteIndex, 1);
      },
      updateUser(state, { payload }) {
        const userToUpdate = state.collection.find((u) => u.id === payload.id);
        Object.entries(payload)
          .forEach(([propName, propValue]) => { userToUpdate[propName] = propValue; });
      },

    }
});
export const {
    addUser,
    deleteUser,
    updateUser,
    loadUsers,
  } = userSlice.actions;
  
  export const selectUsers = (state) => state.users.collection;
  
  export default userSlice.reducer;
  