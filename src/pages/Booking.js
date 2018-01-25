import React, { Component } from 'react';
import moment from 'moment';


import NavBar from '../components/NavBar';
import Datepicker from '../components/Datepicker'
import Footer from '../components/Footer';
import Room_Selected from  '../components/Room-selection';
import FormSelection from '../components/Form-selection'
import '../css/booking.css';

class Booking extends Component {

    render() {

        const progBar ={
            width:  '25%'
        }


        return (
            <div className="mainContainer">
                <NavBar/>
                    <div className="container-fluid ">
                        <div className="col-md-10 offset-1">
                            <div className="row selected-date">
                                <div className="col-md-3">
                                    <p>CHECK-IN <Datepicker startDate={moment()} />  </p>
                                </div>
                                <div className="col-md-3">
                                    <p>CHECK-OUT <Datepicker startDate={moment().add(1, "days")}  className="date"/>  </p>
                                </div>

                                <div className="col-md-2 no-rooms">
                                    <p>ROOMS
                                        <FormSelection  val={1}/>
                                    </p>
                                </div>

                                <div className="col-md-2 no-rooms">
                                    <p>GUESTS
                                        <FormSelection val={1} />
                                    </p>
                                </div>

                                <div className="col-md-2 no-rooms">
                                    <p>CHILDREN
                                        <FormSelection  val={0}/>
                                    </p>
                                </div>
                            </div>

                            <div className="row selection">
                                <div className="col-md-3"> <p><b>1. Room selection</b></p></div>
                                <div className="col-md-3"> <p>2. Add Enhancement</p></div>
                                <div className="col-md-3"> <p>3. Booking Details</p></div>
                                <div className="col-md-3"> <p>4. Make Payment</p></div>
                            </div>

                            <div className="row mb-3">
                                <div className="progress col-md-12">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                         role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={progBar}>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 ">
                                    <Room_Selected roomName={"SINGLE ROOM"} />
                                    <Room_Selected roomName={"DOUBLE ROOM"} />
                                    <Room_Selected roomName={"DELUX ROOM"} />
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Booking;
