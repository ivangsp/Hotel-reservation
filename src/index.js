import React from 'react';
import ReactDOM from 'react-dom';

import {Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter} from 'react-router-redux'


import createHistory from 'history/createBrowserHistory';



import './css/index.css';
import Home from './components/front-end/home/Home';
import Contact_us from './components/front-end/contact/Contact-us'
import AdminContainer from './containers/AdminContainer'
import BookingContainer from './containers/BookingContainer'

import store from './store'


import registerServiceWorker from './registerServiceWorker';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()


const  app = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/contact" exact  component={Contact_us} />
                <Route path="/booking" exact  component={BookingContainer} />
                <Route path="/admin" exact component={AdminContainer} />
            </div>
        </ConnectedRouter>
    </Provider>,
    app
)
registerServiceWorker();
