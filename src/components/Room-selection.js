import React, { Component } from 'react';
import single_room from '../images/room_single.jpg'

class Room_selection extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <h4>DELUX ROOM</h4>
                            </div>
                            <div className="col-md-3 col-xs-12">
                                <img className="card-img-top" src={single_room} alt="single room" />
                            </div>
                            <div className="col-md-9 col-xs-12">
                                <div className="col-md-5">
                                    <div className="d-flex flex-column">
                                        <p> <i className="fa fa-check" aria-hidden="true"></i> Bed & Breakfast</p>
                                        <i>Accomodation | Breakfast</i>
                                    </div>
                                </div>

                                <div className="col-2">
                                    <i class="fa fa-male"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                    </div>

                    <div className="col-md-8">
                    </div>
                </div>
            </div>
        );
    }
}

export default  Room_selection ;
