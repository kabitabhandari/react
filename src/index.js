import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ComponentShowingUseState from './ComponentShowingUseState';
import reportWebVitals from './reportWebVitals';
import ComponentRenderingList from "./ComponentRenderingList";
import ComponentRenderingButtonEvent from "./ComponentRenderingButtonEvent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentShowingUseState />
    <ComponentRenderingButtonEvent />
    <ComponentRenderingList></ComponentRenderingList>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
