import design from './__resources/design/desktop-design.jpg';
import divider from './__resources/images/pattern-divider-desktop.svg';
import dice from './__resources/images/icon-dice.svg';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={design} />
        <div className="card">
          <label>Advice <em>117</em></label>
          <p className="advice-paragraph">it is easy to sit up and take notice, what's difficult is getting up and taking action.</p>
          <img src={divider} />
          <button className="dice-button"><img src={dice} /></button>
        </div>
      </header>
    </div>
  );
}

export default App;
