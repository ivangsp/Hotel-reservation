import React, { Component } from 'react';
import '../App.css';

import NavBar from './NavBar';
import LandingPage from './LandingPage'
import Rooms from './Rooms'
import Footer from './Footer'
class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar/>
                <LandingPage />
                <Rooms />
                <Footer />
            </div>
        );
    }
}

export default Home;
