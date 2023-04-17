import { legacy_createStore as createStore } from "redux";
import { answerReducer } from "../reducers/answerReducer";

export const store = createStore(answerReducer);