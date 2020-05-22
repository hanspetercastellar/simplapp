import { configureStore } from '@reduxjs/toolkit';

import authReducer from "./feature/auth/auth.slice"

export default configureStore({

    reducer: {
        auth: authReducer,
    }
})