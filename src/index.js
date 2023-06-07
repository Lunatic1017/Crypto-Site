import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import 'antd/dist/antd';
import store from './app/store';


createRoot(document.getElementById('root')).render(


<Router>
    <Provider store={store}>
    <App /> 
   </Provider>

 </Router>


);

