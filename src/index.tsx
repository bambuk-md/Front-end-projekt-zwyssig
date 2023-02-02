import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';



import Taskers from './Add';
import Tasks from './AppDelete';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
   
    
  
    
    
    <Tasks></Tasks>
    <Taskers></Taskers>
   

    
    
    
  </React.StrictMode>
);


reportWebVitals();
