//Dependences
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

//Routes
import AppRoutes from "./routes";

//Assets
import './index.css';

//Other
//import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
