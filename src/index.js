import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import App from './App';
import {CocktailContextProvider} from './cocktailContext'


ReactDOM.render(
  <React.StrictMode>
    <CocktailContextProvider>
      <App />
    </CocktailContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
