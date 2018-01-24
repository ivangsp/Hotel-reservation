import React, { Component } from 'react';
import '../css/App.css';

import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage'
import Rooms from '../components/Rooms'
import Footer from '../components/Footer'
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
