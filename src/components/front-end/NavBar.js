import React, { Component } from 'react';

import {Link} from 'react-router-dom'
class NavBar extends Component {
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <Link className="navbar-brand hotelName" to="/">Jaffer apartments</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto hotelName">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#services">Services</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contact">Contact Us </Link>
                                </li>

                            </ul>

                            <Link to="/booking" className="btn btn-danger my-2 my-sm-0 btn-bgcolor" type="submit">Book Now</Link>
                        </div>

                </nav>
        );
    }
}

export default NavBar
