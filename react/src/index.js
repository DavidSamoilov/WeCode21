import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './Login';
// import MyFunctionComponent, {MYPI, myFunc} from './MyFunctionComponent';
import reportWebVitals from './reportWebVitals';

import { what } from './App'

const lala = {
  wawa: {
    nana: {
      x: 42,
      y: 17
    }
  }
}

const x = what(lala, 'wawa.nana.x');
const y = what(lala, 'wawa.mama.x');
console.log('x', x, 'y', y);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
