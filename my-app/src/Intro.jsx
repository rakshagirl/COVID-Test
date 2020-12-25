import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Intro() {


  return (
    <>
    <Card variant='outlined'>
        <CardContent>
            <Typography>
                The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. 
                This system is not intended for the diagnosis or treatment of disease, including COVID-19.
            </Typography>
            <br></br>
            <Typography>
                Call 911 if you have any extreme or life
                threatening symptoms including constant
                chest pain or pressure, extreme difficulty
                breathing or severe shortness of breath,
                severe constant dizziness or
                lightheadedness, slurred speech, or difficulty
                waking up. Otherwise, let's get started. 
            </Typography>
            <br></br>
            <Typography>
                This test is intended only for people who
                are older than 18. 
            </Typography>
        </CardContent>
    </Card>
    </>

  );
}

export default Intro;
