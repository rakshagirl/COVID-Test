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
      "Are you experiencing any of these symptoms?\n" +
      "• Fever or feeling feverish (chills, sweating)\n" +
      "• Difficulty breathing (not severe)\n" +
      "• New or worsening cough\n" +
      "• Sore throat\n" +
      "• Whole body aches\n" +
      "• Vomiting or diarrhea",

      "In the last 2 weeks, have you had any of the following exposures?\n" +
      "• Contact with a COVID-19+ person\n" +
      "• International travel\n" +
      "• Live in or have visited a place where COVID-19 is widespread",

      "Do you live in a nursing home, assisted living or long-term care facility?",

      "Do you currently or plan to within the next 2 weeks, work or volunteer in a healthcare facility?",

      "Do you have any of the following conditions?\n" +
      "• Chronic lung disease or moderate to severe asthma\n" +
      "• Congestive heart failure\n" +
      "• Diabetes with complications\n" +
      "• Neurologic conditions that weaken ability to cough\n" +
      "• People with weakened immune systems\n" +
      "• Dialysis\n" +
      "• Cirrhosis of the liver\n" +
      "• Pregnancy\n" +
      "• Extreme obesity (BMI ≥ 40)"
  ];

  return (
    <>  
    {/* if you want to return more than one thing */}
        <Grid container spacing={2}>
          {/* outside Grid tag with each having 2 spacing */}
          <Grid item xs={12} md={12} lg={12}>
            {/* each grid item has a tag - for accessibility, large/med/small screens will have question over entire screen (12 columns) */}
            <Intro/>
          </Grid>
          {/* .map is a function that takes in a function as a parameter.
          (question) => is an unnamed function with parameter as each question in questions.
          The function returns each Grid item (with small/large screen stuff).
          The <Question/> tag has an attribute of toPrint (from child props.toPrint) 
          Essentially taking props.toPrint line from Question.jsx and calling here?
          toPrint and question have data type String (text of each question).*/}
            {questions.map( (question) => {
              return (
                <Grid item xs={12} md={12} lg={12}>
                  <Question toPrint={question}/> 
                </Grid>
              );
            })}
         </Grid>
    </>
  );
}

export default Body;
