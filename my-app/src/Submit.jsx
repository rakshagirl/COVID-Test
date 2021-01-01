import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Intro from "./Intro";
import Question from './Question';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Submit(props) {

    const [messageSet, setMessages] = useState([]);

    const messages = [
        "• Testing is not recommended at this time\n",
        "• Contact your provider if symptoms worsen, testing may be recommended\n",
        "• Testing recommended\n",
        "• Self isolate\n",
        "• You may be asked to wear a mask\n",
        "• Practice social distancing\n",
        "• If ≥65yo OR with chronic conditions: Obtain 30 day supply of medications\n",
        "• Monitor symptoms / Check temp twice daily x 14 days\n"
    ];

    useEffect(() => {
        let {answerSet} = props.location.state;
        let results = [];
        switch(answerSet){
            case (answerSet[0] && answerSet[3]):
                results.push(messages[3]);
            case (answerSet[3] || answerSet[4]):
                results.push(messages[3]);
                results.push(messages[1]);
            default:
                results.push(messages[4]);
                results.push(messages[5]);

        }
        setMessages(results);

    }, []);

    return (
        <>  
        {/* if you want to return more than one thing */}
            <Grid container spacing={2}>
            {/* outside Grid tag with each having 2 spacing */}
            <Grid item xs={12} md={12} lg={12}>
                {/* each grid item has a tag - for accessibility, large/med/small screens will have question over entire screen (12 columns) */}
                <Card variant='outlined'>
                    <CardContent>
                        <Typography variant="h5">
                            Here are your results!
                        </Typography>
                        <br></br>
                        {messageSet.map((message) => {
                            return (
                                <Typography>
                                    {message}
                                </Typography>
                            );
                        })}
                    </CardContent>
                </Card>
            </Grid>

            </Grid>
            <br/>
        </>
    );
}
