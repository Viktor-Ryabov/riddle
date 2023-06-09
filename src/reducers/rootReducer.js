import { combineReducers } from "redux";
import { answerReducer } from "./answerReducer.js";
import { userReducer } from "./userReducer.js";
import { navbarButtonsReducer } from "./navbarButtonsReducer.js";
import { noticeActiveReducer } from "./noticeActiveReducer.js";
import { fetchReducer } from "./fetchReducer.js";

export const rootReducer = combineReducers({
    noticeActive: noticeActiveReducer,
    navbarButtons: navbarButtonsReducer,
    answers: answerReducer,
    userState: userReducer,
    fetchState: fetchReducer,

});