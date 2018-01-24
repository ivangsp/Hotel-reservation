import React, { Component } from 'react';

import NavBar from '../components/NavBar';

import Footer from '../components/Footer'
class Booking extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar/>
                    Bookings!!
                <Footer />
            </div>
        );
    }
}

export default Booking;
