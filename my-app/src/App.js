import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Button from '@material-ui/core/Button';

function App() {

  const [text, setText] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <Button variant="contained" color="secondary" onClick={() => setText(text+1)}>
        Click Me!
      </Button>
        {text == 2 && <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>}
      </header>
    </div>
  );
}

export default App;
