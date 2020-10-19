import React from 'react';
import MealContainer from "./containers/MealContainer"
import SearchPage from "./pages/SearchPage"
import {Route,Switch} from "react-router-dom";
import CounterContainer from "./containers/CounterContainer"

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <Switch>
        <Route  path="/" component={MealContainer}  exact/>
        <Route path="/search/:word" component={SearchPage} />
        <Route render={(location)=><h1>{location.pathname} not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
