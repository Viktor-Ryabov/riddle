import "./App.css";
import { Routes, Route} from "react-router-dom";
import Riddle1 from "../Riddle1/Riddle1.js";
import Riddle2 from "../Riddle2/Riddle2.js";
import Riddle3 from "../Riddle3/Riddle3.js";
import Riddle4 from "../Riddle4/Riddle4";
import Riddle5 from "../Riddle5/Riddle5";
import { Provider } from "react-redux";
import { store } from "../../store/store.js";
import Main from "../../Pages/Main/Main";


function App() {
    return (
        <Provider store={store}>
                <div className="App">
                    <Routes>
                        <Route exact path="/" element={<Main />} />
                        <Route exact path="/first" element={<Riddle1 />} />
                        <Route path="/second" element={<Riddle2 />} />
                        <Route path="/third" element={<Riddle3 />} />
                        <Route path="/fourth" element={<Riddle4 />} />
                        <Route path="/fifth" element={<Riddle5 />} />
                    </Routes>
                </div>
        </Provider>
    );
}
export default App;
