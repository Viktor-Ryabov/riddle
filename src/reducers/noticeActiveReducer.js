import { defaultState } from "../constants/defaultState";

export const noticeActiveReducer = (
    state = defaultState.noticeActive,
    action
) => {
    switch (action.type) {
        case "QUESTION_NOTICE_ACTIVE":
            return { ...state, questionNotiseActive: true };
        case "QUESTION_NOTICE_DISABLED":
            return { ...state, questionNotiseActive: false };

        case "WRONG_ANSWER_ACTIVE":
            return { ...state, wronAnswerNoticeActive: true };
        case "WRONG_ANSWER_DISABLED":
            return { ...state, wronAnswerNoticeActive: false };

        case "RIGHT_ANSWER_ACTIVE":
            return { ...state, rightAnswerNotiseActive: true };
        case "RIGHT_ANSWER_DISABLED":
            return { ...state, rightAnswerNotiseActive: false };

        case "REGISTRATION_POPUP_ACTIVE":
            return { ...state, registrationPopupActive: true };
        case "REGISTRATION_POPUP_DISABLED":
            return { ...state, registrationPopupActive: false };

        case "ENTERY_POPUP_ACTIVE":
            return { ...state, enteryPopupActive: true };
        case "ENTERY_POPUP_DISABLED":
            return { ...state, enteryPopupActive: false };

        case "SUCCESS_AUTH_POPUP_ACTIVE":
            return { ...state, successAuthNotiseActive: false };

        case "SUCCESS_REGISTRATION_POPUP_ACTIVE":
            return { ...state, successRegistrationNotiseActive: true };

        case "ERROR_AUTH_POPUP_ACTIVE":
            return { ...state, errorAuthNotiseActive: true };

        case "ALL_MODAL_DISABLED":
            return {
                ...state,
                wronAnswerNoticeActive: false,
                rightAnswerNotiseActive: false,
                questionNotiseActive: false,
                successRegistrationNotiseActive: false,
                successAuthNotiseActive: false,

                registrationPopupActive: false,
                enteryPopupActive: false,
            };

        default:
            return state;
    }
};
