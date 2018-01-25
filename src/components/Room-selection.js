import React, { Component } from 'react';
import delux from "../images/delux-room-small.jpeg"

class Room_Selected extends Component {
    super

    render() {
        const roomName = this.props.roomName;
        return (
            <div className="row container1 ">
                <div className="col-md-12 hd-bgcolor pt-2"><p>{roomName}</p></div>
                <div className="col-md-4 pl-0">
                    <img src={delux} alt="" className="rooms-img"/>
                </div>
                <div className="col-md-8 pt-2">
                    <div className="row">
                        <div className="col-md-5">
                            <ul class="fa-ul">
                                <li><i class="fa-li fa fa-check-square" />Bed(2 people)</li>
                                <li><i class="fa-li fa fa-check-square" />Breakfast</li>
                                <li><i class="fa-li fa fa-check-square" /><i className="pr-1 fa fa-wifi" aria-hidden="true" />Free Wifi</li>
                                <li><i class="fa-li fa fa-check-square" /><i className="pr-2 fa fa-television" aria-hidden="true" />24 inch Television</li>
                            </ul>

                        </div>
                        <div className="col-md-1" >
                            <i className="fa fa-male"></i>
                            <i className="fa fa-female"></i>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column">
                                <p>USD 200.0 <br/>
                                    <small>for 1 Night</small> </p>
                            </div>

                        </div>
                        <div className="col-md-3" >
                            <button className="btn btn-success " >BOOK NOW</button>
                        </div>
                    </div>

                    <div className="col-md-12 customHr pl-2" ></div>

                    <div className="row ">
                        <div className="col-md-6 ">
                            <div className="form-group pl-4">
                                <label htmlFor="pickup">
                                    <input className="form-check-input position-static" type="checkbox" id="pickup" value="option1" />
                                    <i className="pl-2 fa fa-car" aria-hidden="true"></i> Airport PickUp(<small>capacity 4 </small>)

                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p> USD: 30  </p></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <a data-toggle="collapse" data-target="#details" className="text-info">Click to show Room Description</a>

                            <div id="details" class="collapse">
                                One-bedroom suites are perfect for business travellers and couples.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default  Room_Selected ;
