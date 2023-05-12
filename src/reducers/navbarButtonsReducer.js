import { defaultState } from "../constants/defaultState";

export const navbarButtonsReducer = (
    state = defaultState.navbarButtons,
    action
) => {
    switch (action.type) {
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
