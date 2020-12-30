import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Body from './Body';
import Submit from './Submit';

export default function Router() {

  return (
    <> 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Body}/>
                <Route path="/submit" component={Submit}/>
                
            </Switch>
        </BrowserRouter>
    </>
  );
}
