import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Intro from "./Intro";
import Question from './Question';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Submit() {

  

  return (
    <>  
    {/* if you want to return more than one thing */}
        <Grid container spacing={2}>
          {/* outside Grid tag with each having 2 spacing */}
          <Grid item xs={12} md={12} lg={12}>
            {/* each grid item has a tag - for accessibility, large/med/small screens will have question over entire screen (12 columns) */}
            <Typography>
                Here are your results!
            </Typography>
          </Grid>

         </Grid>
         <br/>
    </>
  );
}
