import divider from './__resources/images/pattern-divider-desktop.svg';
import dice from './__resources/images/icon-dice.svg';
import './App.css';

const API_URL = 'https://api.adviceslip.com/advice';
let res = {};

function App() {

  return (
    <div className="App">
        <div className="card">
          <label>Advice <em>117</em></label>
          <p className="advice-paragraph">it is easy to sit up and take notice, what's difficult is getting up and taking action.</p>
          <img src={divider} />
          <button 
            className="dice-button" 
            onClick={() => getFetchData() }>
              <img src={dice} />
          </button>
          
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/elice-study-first/advice-generator-jihoonkim" target="_blank">Jihoon Kim</a>.
        </div>
    </div>
    
  );
}

export function getFetchData() {
  const diceButton = document.querySelector('button.dice-button');
  diceButton.classList.add('processing');

  const idElement = document.querySelector('label em');
  const paragraphElement = document.querySelector('.advice-paragraph');
  idElement.textContent = "...";
  paragraphElement.classList.add('processing');
  paragraphElement.textContent = "Hearing from wise...";

  fetch(API_URL).then( response => response.json())
    .then( data => {
      res = data.slip
      
      //console.log(res);
      setTimeout( () => {
        return generateAdvice(res)
      }, 2500)
    })
}

export function generateAdvice(res) {
  const diceButton = document.querySelector('button.dice-button');
  diceButton.classList.remove('processing');

  const idElement = document.querySelector('label em');
  const paragraphElement = document.querySelector('.advice-paragraph');
  paragraphElement.classList.remove('processing');

  idElement.innerHTML = res.id;
  paragraphElement.innerHTML = res.advice;
}

export default App;
