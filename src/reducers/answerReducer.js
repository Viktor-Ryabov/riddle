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

        // case "SET_MAIN_ACTIVE":
        //     return {
        //         ...state,
        //         navbarButtons: {
        //             main: true,
        //             about: false,
        //             contacts: false,
        //             registration: false,
        //             personalPage: false,
        //             questionPage: false,
        //         },
        //     };
        // case "SET_ABOUT_ACTIVE":
        //     return {
        //         ...state,
        //         navbarButtons: {
        //             main: false,
        //             about: true,
        //             contacts: false,
        //             registration: false,
        //             personalPage: false,
        //             questionPage: false,
        //         },
        //     };
        // case "SET_REGISTRATION_ACTIVE":
        //     return {
        //         ...state,
        //         navbarButtons: {
        //             main: false,
        //             about: false,
        //             contacts: false,
        //             registration: true,
        //             personalPage: false,
        //             questionPage: false,
        //         },
        //     };
        // case "SET_CONTACTS_ACTIVE":
            return {
                ...state,
                navbarButtons: {
                    main: false,
                    about: false,
                    contacts: true,
                    registration: false,
                    personalPage: false,
                    questionPage: false,
                },
            };

        default:
            return state;
    }
};
