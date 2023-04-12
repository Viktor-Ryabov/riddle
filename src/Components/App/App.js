import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main.js";
import Riddle1 from "../Riddle1/Riddle1.js";
import Riddle2 from "../Riddle2/Riddle2.js";
import Riddle3 from "../Riddle3/Riddle3.js";
import Riddle4 from "../Riddle4/Riddle4.js";
import Riddle5 from "../Riddle5/Riddle5.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                  <Route path="*" element={<Main />} />
                  <Route path="one" element={<Riddle1 />} />
                  <Route path="two" element={<Riddle2 />} />
                  <Route path="three" element={<Riddle3 />} />
                  <Route path="four" element={<Riddle4 />} />
                  <Route path="five" element={<Riddle5 />} />
                </Routes>
                
            </Router>
        </div>
    );
}

export default App;
