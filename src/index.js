import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// const myLogger = (store) => {             // basic middle ware, it will run every time BEFORE the action hit the reducer
//   return next => {                        // action => middleware => reducer
//     return action => {
//       console.log("middleware ran");
//       return next(action);
//     }
//   }
// }

// OR short hand

// const secondMiddle = store => next => action => {
//   console.log(store.getState());
//   return next(action);
// }

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
