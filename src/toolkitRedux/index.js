import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tollkitReducer from "./tollkitReducer";

const rootReducer = combineReducers({
    tollkit: tollkitReducer,
});

export const store = configureStore ({
    reducer: rootReducer,
})