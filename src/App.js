import './App.css';
import Card from './Card';

function App() {
  const ATTR_URL = 'https://www.frontendmentor.io?ref=challenge';
  const GIT_REPO_URL = 'https://github.com/elice-study-first/advice-generator-jihoonkim';
  
  return (
    <div className="App">
      <Card></Card>
      <div className="attribution">
          Challenge by <a href={ATTR_URL} target="_blank">Frontend Mentor</a>. 
         Coded by <a href={GIT_REPO_URL} target="_blank">Jihoon Kim</a>.
      </div>
    </div>
  );
}

export default App;
