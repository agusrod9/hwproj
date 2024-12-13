import { configureStore } from "@reduxjs/toolkit";
import { myHotWheelsApi } from "../services/dbServices";
import { authApi } from "../services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import carReducer from '../features/carSlice'
import authReducer from '../features/userSlice'

const store = configureStore({
    reducer: {
        [myHotWheelsApi.reducerPath] : myHotWheelsApi.reducer,
        car: carReducer,
        auth: authReducer,
        [authApi.reducerPath] : authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(myHotWheelsApi.middleware)
            .concat(authApi.middleware)
});

setupListeners(store.dispatch)

export default store