import { defaultState } from "../constants/defaultState";

export const answerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GOT_ANSWER":
            return { ...state, answer: action.payload, questionNotiseActive: false };
        case "IS_ANSWER_WRON":
            return {
                ...state,
                countAnswers: state.countAnswers + action.payload,
                wronAnswerNoticeActive: true,
            };
        case "QUESTION_NOTICE_ACTIVE":
            return { ...state, questionNotiseActive: true, wronAnswerNoticeActive: false, rightAnswerNotiseActive: false};
        case "WRONG_ANSWER_ACTIVE":
            return { ...state, questionNotiseActive: false, wronAnswerNoticeActive: true, rightAnswerNotiseActive: false};
        case "RIGHT_ANSWER_ACTIVE":
            return { ...state, questionNotiseActive: false, wronAnswerNoticeActive: false, rightAnswerNotiseActive: true};
        case "QUESTION_NOTICE_DISABLED":
            return { ...state, questionNotiseActive: false };
        case "WRONG_ANSWER_DISABLED":
            return { ...state, wronAnswerNoticeActive: false };
        case "RIGHT_ANSWER_DISABLED":
            return { ...state, rightAnswerNotiseActive: false };


            case "MODAL_ACTIVE":
                return { ...state, modal: true };
            case "ALL_MODAL_DISABLED":
                return { ...state, questionNotiseActive: false, wronAnswerNoticeActive: false, rightAnswerNotiseActive: false };
        // case: "IS_ANSWER_RIGHT":

        default:
            return state;
    }
};
