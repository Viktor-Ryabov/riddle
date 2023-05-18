import { defaultState } from "../constants/defaultState";

export const fetchReducer = (state = defaultState.fetchState, action) => {
    switch (action.type) {
        case "GET_FETCH_STATUS":
            return {
                ...state,
                fetchStatus: action.fetchStatus,
            };
        case "GET_FETCH_MASSAGE":
            return {
                ...state,
                fetchMassege: action.fetchMassege,
            };
        case "GET_FETCH_ERROR":
            return {
                ...state,
                fetchError: action.fetchError,
            };
        case "GET_FETCH_DATA":
            return {
                ...state,
                fetchData: action.fetchData,
            };
        default:
            return state;
    }
};
