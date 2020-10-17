import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from "redux"
import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"
import rootReducer from "./modules/rootReducer"
import ReduxThunk from "redux-thunk"
import {Provider} from "react-redux";
import Logger from "./middleware/Logger"

const customHistory = createBrowserHistory();

const store = createStore(rootReducer,applyMiddleware(ReduxThunk.withExtraArgument({history:customHistory}),Logger));

ReactDOM.render(
  <Router history={customHistory}>
  <Provider store={store} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider> 
  </Router>
  ,
  document.getElementById('root')
);
serviceWorker.unregister();
