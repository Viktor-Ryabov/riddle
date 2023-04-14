import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "../../toolkitRedux";
import Modal from "../Modal/Modal/Modal.js";
import Riddle1 from "../Riddle1/Riddle1.js";
import Riddle2 from "../Riddle2/Riddle2.js";
import Riddle3 from "../Riddle3/Riddle3.js";
import Riddle4 from "../Riddle4/Riddle4.js";
import Riddle5 from "../Riddle5/Riddle5.js";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const setModalDisabled = () => {
        setModalActive(false);
    }
    return (
        <Provider store={store}>
            <div className="App">
            <Modal active={modalActive} setModalDisabled={setModalDisabled} />
                <Router>
                    <Routes>
                        <Route path="*" element={<Riddle1 setModalActive={setModalActive}/>} />
                        <Route path="two" element={<Riddle2 setModalActive={setModalActive}/>} />
                        <Route path="three" element={<Riddle3 setModalActive={setModalActive}/>} />
                        <Route path="four" element={<Riddle4 setModalActive={setModalActive}/>} />
                        <Route path="five" element={<Riddle5 setModalActive={setModalActive}/>} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
