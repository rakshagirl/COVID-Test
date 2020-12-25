import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Intro from "./Intro";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//props.question = text of question
//props.onClick

//props is an object that has attribute toPrint
export default function Question(props) {

  return (
    <>
        <Card variant='outlined'>
        <CardContent>
            <Typography style={{whiteSpace: 'pre-line'}}>
                {props.toPrint}
            </Typography>
            <br></br>
            <FormControl component="fieldset">
            <FormLabel component="legend">Choose an Answer:</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Yes"
                labelPlacement="start"
                />
                <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No"
                labelPlacement="start"
                />
            </RadioGroup>
            </FormControl>
        </CardContent>
    </Card>  
    </>
  );
}

