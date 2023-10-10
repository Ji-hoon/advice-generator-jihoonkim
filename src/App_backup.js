import logo from './logo.svg';
import design from './__resources/design/desktop-design.jpg';
import divider from './__resources/images/pattern-divider-desktop.svg';
import dice from './__resources/images/icon-dice.svg';


import './App.css';

const element = <h1>Hello, world!</h1>;

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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>New React App lol!</h2>
        <p>
          
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => console.log(element) }>
          Like
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
