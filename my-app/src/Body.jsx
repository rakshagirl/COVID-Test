import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Intro from "./Intro";
import Question from './Question';
import Grid from '@material-ui/core/Grid';

function Body() {

  const questions= [
      "Are you experiencing any of these symptoms?\n"
  ];

  return (
    <>
        <Intro/>
         <Question/> 
    </>
  );
}

export default Body;
