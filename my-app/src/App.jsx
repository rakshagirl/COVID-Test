import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Intro from "./Intro";

function App() {

  const [text, setText] = useState(0);

  

  return (
    <div className="App">
      <Container maxWidth="md" style={{ backgroundColor: '#FFEEF7', height: '100vh' }}>
        <br/>
        <Typography color='primary' variant='h2'>
          COVID-19 Questionnaire
        </Typography>
        <Intro/>
      </Container>

    </div>
  );
}

export default App;
