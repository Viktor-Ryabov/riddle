import { defaultState } from "../constants/defaultState";

export const userReducer = (state = defaultState.userState, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                userName: action.payload,
            };
        case "AUTH_USER":
            return {
                ...state,
                isAuth: action.payload,
            };
        default:
            return state;
    }
};