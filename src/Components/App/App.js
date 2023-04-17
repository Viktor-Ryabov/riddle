import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Riddle1 from "../Riddle1/Riddle1.js";
import { Provider } from "react-redux";
import { store } from "../../store/store.js";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="*" element={<Riddle1 />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
