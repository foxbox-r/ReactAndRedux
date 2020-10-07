import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./modules/rootReducer"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import ReactThunk from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(ReactThunk));


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
