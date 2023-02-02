import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';
import Getone from './Getone';
import InputCostomer from './Add';
import Taskers from './Add';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Welcome></Welcome>
  
    
    <Getone taskid={1}></Getone>
    <Taskers></Taskers>
   

    
    
    
  </React.StrictMode>
);


reportWebVitals();
