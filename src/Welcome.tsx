import React from 'react';
import ReactDOM from 'react-dom/client';
import Tasks from './App';
import './App.css';

function welcome() {
    return(
        <div>
    <h1>Welcome to the to-do list</h1>
    <h3>Your to-do's</h3>
    <Tasks/>
    
    </div>
    );
    
    
};
export default welcome;