import { defaultState } from "../constants/defaultState";

export const answerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GOT_ANSWER":
            return { ...state, answer: action.payload };
        case "IS_ANSWER_WRON":
            return { ...state, countAnswers: state.countAnswers + action.payload };

        // case: "IS_ANSWER_RIGHT":

        default:
            return state;
    }
};