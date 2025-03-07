import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga4'; // Importa react-ga4
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de envolver tu app en un Router

// Inicializa Google Analytics en el index.js
ReactGA.initialize('G-CFH4SLDB44'); // Reemplaza con tu propio ID de propiedad de GA4

//Para depurar
/*ReactGA.initialize('G-CFH4SLDB44', {
  gaOptions: {
    debug_mode: true,
  },
  gtagOptions: {
    debug_mode: true,
  },
});*/
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

const root = ReactDOM.createRoot(document.getElementById('root')); // Usar createRoot
root.render( // Usar render con createRoot
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
