import { defaultState } from "../constants/defaultState";

export const answerReducer = (state = defaultState.answers, action) => {
    switch (action.type) {
        case "GOT_ANSWER":
            return {
                ...state,
                answer: action.payload,
                questionNotiseActive: false,
            };
        case "IS_ANSWER_WRON":
            return {
                ...state,
                countAnswers: state.countAnswers + action.payload,
                wronAnswerNoticeActive: true,
            };
        case "RIGHT_ANSWER":
            return {
                ...state,
                numberOfCurrentQuestion:
                    state.numberOfCurrentQuestion + action.plusOne,
            };
        default:
            return state;
    }
};
