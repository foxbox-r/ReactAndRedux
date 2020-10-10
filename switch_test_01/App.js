import React from 'react';
import {Route,Link,Switch} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Profiles from "./component/Profiles"
import History from"./component/History"
import WithRouterSample from "./component/WithRouterSample"

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/profiles">profiles</Link></li>
        <li><Link to="/history">history</Link></li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route render={({location})=>(
          <div>
            <h2>{location.pathname} 경로를 찾을수 없습니다.</h2>
          </div>
        )} />
      </Switch>
      {/* <WithRouterSample /> */}
    </div>
  );
}

export default App;
