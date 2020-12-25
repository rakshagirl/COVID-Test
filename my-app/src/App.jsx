import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Intro from "./Intro";
import Body from './Body';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Work Sans',
      'sans-serif',
    ].join(','),
  },});

function App() {

  const [text, setText] = useState(0);

  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="md" style={{ backgroundColor: '#FFDDDD' }}>
          <br/>
          <Typography color='primary' variant='h2'>
              <b>
                COVID-19 Questionnaire
              </b>
          </Typography>
          <Body/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
