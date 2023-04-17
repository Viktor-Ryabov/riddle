import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import QuestonModal from "../Modal/QuestonModal/QuestonModal.js";
import Riddle1 from "../Riddle1/Riddle1.js";
import { Provider } from "react-redux";
import { store } from "../../store/store.js";

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
