import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import s from "components/App.module.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className={s.App}/>
  </React.StrictMode>
);
