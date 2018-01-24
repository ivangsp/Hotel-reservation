import React, { Component } from 'react';
class NavBar extends Component {
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">HotelName</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Contact Us </a>
                                </li>

                            </ul>

                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Book Now</button>
                        </div>
                    </div>

                </nav>
        );
    }
}

export default NavBar
