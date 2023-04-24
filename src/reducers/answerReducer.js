import { defaultState } from "../constants/defaultState";

export const answerReducer = (state = defaultState, action) => {
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
        case "QUESTION_NOTICE_ACTIVE":
            return { ...state, questionNotiseActive: true };
        case "WRONG_ANSWER_ACTIVE":
            return { ...state, wronAnswerNoticeActive: true };
        case "RIGHT_ANSWER_ACTIVE":
            return { ...state, rightAnswerNotiseActive: true };
        case "REGISTRATION_POPUP_ACTIVE":
            return { ...state, registrationPopupActive: true };
        case "ENTERY_POPUP_ACTIVE":
            return { ...state, enteryPopupActive: true };

        case "QUESTION_NOTICE_DISABLED":
            return { ...state, questionNotiseActive: false };
        case "WRONG_ANSWER_DISABLED":
            return { ...state, wronAnswerNoticeActive: false };
        case "RIGHT_ANSWER_DISABLED":
            return { ...state, rightAnswerNotiseActive: false };
        case "REGISTRATION_POPUP_DISABLED":
            return { ...state, registrationPopupActive: false };
        case "ENTERY_POPUP_DISABLED":
            return { ...state, enteryPopupActive: false };

        case "ALL_MODAL_DISABLED":
            return {
                ...state,
                questionNotiseActive: false,
                wronAnswerNoticeActive: false,
                rightAnswerNotiseActive: false,
                registrationPopupActive: false,
                enteryPopupActive: false,
            };

        case "SET_MAIN_ACTIVE":
            return {
                ...state,
                navbarButton_Main: true,
                navbarButton_About: false,
                navbarButton_Contacts: false,
                navbarButton_Registration: false,
                navbarButton_QuestionPage: false,
                navbarButton_Rules: false,
            };
        case "SET_ABOUT_ACTIVE":
            return {
                ...state,
                navbarButton_Main: false,
                navbarButton_About: true,
                navbarButton_Contacts: false,
                navbarButton_Registration: false,
                navbarButton_QuestionPage: false,
                navbarButton_Rules: false,
            };
        case "SET_CONTACTS_ACTIVE":
            return {
                ...state,
                navbarButton_Main: false,
                navbarButton_About: false,
                navbarButton_Contacts: true,
                navbarButton_Registration: false,
                navbarButton_QuestionPage: false,
                navbarButton_Rules: false,
            };
        case "SET_RULES_ACTIVE":
            return {
                ...state,
                navbarButton_Main: false,
                navbarButton_About: false,
                navbarButton_Contacts: false,
                navbarButton_Registration: false,
                navbarButton_QuestionPage: false,
                navbarButton_Rules: true,
            };
        case "SET_QUESTION_PAGE_ACTIVE":
            return {
                ...state,
                navbarButton_Main: false,
                navbarButton_About: false,
                navbarButton_Contacts: false,
                navbarButton_Registration: false,
                navbarButton_QuestionPage: true,
                navbarButton_Rules: false,
            };
        case "SET_ALL_PAGES_DISABLED":
            return {
                ...state,
                navbarButton_Main: false,
                navbarButton_About: false,
                navbarButton_Contacts: false,
                navbarButton_Registration: false,
                navbarButton_QuestionPage: false,
                navbarButton_Rules: false,
            };

        default:
            return state;
    }
};
