import React from 'react';
import {Route,Link} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Profile from "./component/Profile"

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles/:userName" component={Profile} />
    </div>
  );
}

export default App;
