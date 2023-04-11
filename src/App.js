import logo from './logo.svg';
import './App.css';

function App() {
  const answerFunc = () => {
    let answer = prompt("Знаете ответ?", "answer");
    let go = window.confirm("Поехали?");
    if(answer == "проверка"){
      alert ("Правильно, сначала нужно протестировать, а потом давать людям!");
      alert ("Вот теперь начинается настоящий  квест");
      if (go){
        window.location.href = 'https://rya-travel.ru';
      }
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-key">234123fd3fcwerv</div>
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
