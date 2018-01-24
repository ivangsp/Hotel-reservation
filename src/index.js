import React from 'react';
import ReactDOM from 'react-dom';

import {Route, BrowserRouter, Switch } from 'react-router-dom';


import Home from './pages/Home';
import Contact_us from './pages/Contact-us'
import Booking from './pages/Booking'
import './css/index.css';

import registerServiceWorker from './registerServiceWorker';

const  app = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/"  exact component={Home} />
            <Route path="/contact" exact  component={Contact_us} />
            <Route path="/booking" exact  component={Booking} />


        </Switch>
    </BrowserRouter>,

    app);
registerServiceWorker();
