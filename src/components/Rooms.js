import React, { Component } from 'react';

import  single_room from '../images/room_single.jpg'
import  double_room from '../images/room_double.jpg'
import  delux_room from '../images/room_deluxe.jpg'
class Rooms extends Component {
    render() {
        return (
            <div className="container-fluid" id="rooms">
                <div class="row ">
                    <div className="card-deck">
                        <div className="card col-md-4">
                            <img className="card-img-top" src={single_room} alt="single room" />
                            <div className="card-body text-left">
                                <h5 className="card-title"> Single Room</h5>
                                <p className="card-text">From $99</p>
                                <p className="card-text">single bed</p>
                                <p>15m<sup>2</sup></p>
                                <p><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
                                <div className="card-footer bg-transparent ">
                                    <button class="btn btn-outline-success btn-md btn-block">Choose Room</button>
                                </div>
                            </div>
                        </div>

                        <div className="card col-md-4">
                            <img className="card-img-top" src={double_room} alt="single room" />
                            <div className="card-body text-left">
                                <h5 className="card-title"> Double Room</h5>
                                <p className="card-text">From $120</p>
                                <p className="card-text">Double bed</p>
                                <p>25m<sup>2</sup></p>
                                <p>
                                    <i class="fa fa-bath"></i><i class="fa fa-phone"></i>
                                    <i class="fa fa-wifi"></i> <i class="fa fa-tv"></i>
                                </p>
                                <div className="card-footer bg-transparent ">
                                    <button class="btn btn-outline-success btn-md btn-block">Choose Room</button>
                                </div>

                            </div>
                        </div>

                        <div className="card col-md-4">
                            <img className="card-img-top" src={delux_room} alt="single room" />
                            <div className="card-body text-left">
                                <h5 className="card-title"> King-size bed</h5>
                                <p className="card-text">From $150</p>
                                <p className="card-text">King size bed</p>
                                <p>40m<sup>2</sup></p>
                                <p>
                                    <i class="fa fa-bath"></i> <i class="fa fa-phone"></i>
                                    <i class="fa fa-wifi"></i> <i class="fa fa-tv"></i>
                                    <i class="fa fa-glass"></i> <i class="fa fa-cutlery"></i>
                                </p>
                                <div className="card-footer bg-transparent ">
                                    <button class="btn btn-outline-success btn-md btn-block">Choose Room</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Rooms;
