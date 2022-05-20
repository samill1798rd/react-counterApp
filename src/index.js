import React from 'react';
import { render } from "react-dom";
import PrimeraApp from './PrimeraApp';
import './index.css';
// import { render } from "react-dom";


const divRoot = document.getElementById("app");
render(<PrimeraApp saludo="Hola, Soy Goku" />, divRoot);


// import { createRoot } from 'react-dom/client';
// import CounterApp from './CounterApp';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render( <PrimeraApp saludo='Hola, Soy Goku' />);
// // root.render( <CounterApp value={ 10 } />);




