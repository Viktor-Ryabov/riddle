import logo from './logo.svg';
import './App.css';

function App() {
  const answerFunc = () => {
    let answer = prompt("Знаете ответ?", "answer");
    let go = window.confirm("Верно! ПОХОД. Это Начало Вашего знакомства с Крымом!");
    if(answer.toLocaleLowerCase() === "поход"){
      if (go){
        window.location.href = 'https://rya-travel.ru';
      }
    } else {
      alert ("подумай еще 🚫")
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-key">срчрё</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Аве, Цезарь!
        </p>
        <a
          className="App-link"
          onClick={()=>(
            answerFunc()

          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          :>
        </a>
      </header>
    </div>
  );
}

export default App;
