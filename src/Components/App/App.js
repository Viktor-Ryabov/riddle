import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Riddle1 from "../Riddle1/Riddle1.js";
import Riddle2 from "../Riddle2/Riddle2.js";
import { Provider } from "react-redux";
import { store } from "../../store/store.js";

function App() {
    return (
        <Provider store={store}>
                <div className="App">
                    <>
                    <Link to="/">Home</Link>
                    <Link to="/second">Second</Link>
                    </>
                    <Routes>
                        <Route exact path="" element={<Riddle1 />} />
                        <Route path="/second" element={<Riddle2 />} />
                    </Routes>
                </div>
        </Provider>
    );
}

export default App;
