import {configureStore} from '@reduxjs/toolkit';
import users from './users';
import auth from './auth';

const store = configureStore({
    reducer: {
        users,
        auth
    },
});

export default store;