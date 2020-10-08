import React from 'react';
import {Route,Link} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Profiles from "./component/Profiles"

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/profiles">profiles</Link></li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}

export default App;
