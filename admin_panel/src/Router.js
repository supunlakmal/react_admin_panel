import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Layout
//import Grid from './Pages/Layout/Grid/Grid';
import Index  from "./Pages/Index";


class App extends Component {
  render() {
    return (
      <Router >

                 <Switch>  

                               <Route exact path="/">
              <Index />
            </Route> 

            {/* <Route exact path="/layout/grid/">
              <Grid />
            </Route> */}



          </Switch>

      </Router>
    );
  }
}

export default App;
