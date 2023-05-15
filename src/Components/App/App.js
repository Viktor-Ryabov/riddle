import "./App.css";
import { Provider } from "react-redux";
import { store } from "../../store/store.js";
import Header from "../Header/Header";
import AppRouter from "../AppRouter";

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <AppRouter />
            </div>
        </Provider>
    );
}
export default App;
