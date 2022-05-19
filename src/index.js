import React from 'react';
import { createRoot } from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';


const container = document.getElementById('app');

const root = createRoot(container);

root.render(<CounterApp value={ 10 }  />);






