//Dependences
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

//Routes
import AppRoutes from "./routes";

//Assets
import './index.css';

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

//import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
