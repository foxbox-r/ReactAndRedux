import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import ReduxThunk from "redux-thunk"
import rootReducer from "./modules/rootReducer"
import MyLogger from "./middlewares/MyLogger"

const store = createStore(rootReducer,applyMiddleware(ReduxThunk,MyLogger));

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
