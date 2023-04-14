import "./App.css";
import { legacy_createStore as createStore } from "redux";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import QuestonModal from "../Modal/QuestonModal/QuestonModal.js";
import Riddle1 from "../Riddle1/Riddle1.js";
import { Provider, useSelector } from "react-redux";

const defaultState = {
    countAnswers: 0,
    answer: "...",
};

const reducer = (state = defaultState, action) => {
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

const store = createStore(reducer);

function App() {
    const [questonModalActive, setQuestonModalActive] = useState(false);
    const setQuestonModalDisabled = () => {
        setQuestonModalActive(false);
    };
    return (
        <Provider store={store}>
            <div className="App">
                <QuestonModal
                    active={questonModalActive}
                    setQuestonModalDisabled={setQuestonModalDisabled}
                />
                <Router>
                    <Routes>
                        <Route
                            path="*"
                            element={
                                <Riddle1
                                    setQuestonModalActive={
                                        setQuestonModalActive
                                    }
                                />
                            }
                        />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
