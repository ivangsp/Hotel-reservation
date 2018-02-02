import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import ViewOrderDetails from './ViewOrderDetails'
import Anouncements from './Announcements'
import moment from "moment/moment";

class NewOrders extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const booking = this.props.newBooking
        return(
            <div className="row">
                <div className="col-md-8 card mb-3">
                    <div className="card-header">
                        <i className="fa fa-table" /> New orders</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                <tr>
                                    <th>Client's Name</th>
                                    <th>No of Rooms</th>
                                    <th>Room Type</th>
                                    <th>Check-in Date</th>
                                    <th>Check-out Date</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>{booking.user.fName}</td>
                                    <td> {booking.noRooms} </td>
                                    <td>{booking.type}</td>
                                    <td>{moment(this.props.booking.checkInDate).format('LL')}</td>
                                    <td>{moment(this.props.booking.checkOutDate).format('LL')}</td>
                                </tr>

                                </thead>

                                <tbody>
                                <tr>
                                    <td>Walusimbi John</td>
                                    <td>1</td>
                                    <td>Single Room</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td>
                                        <Link to="" type="button" class="" data-toggle="modal" data-target="#exampleModalCenter">
                                            view details
                                        </Link>
                                        <select name="" className="ml-2 form-control-sm">
                                            <option value="">Assign Room</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Walusimbi John</td>
                                    <td>1</td>
                                    <td>Single Room</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td>
                                        <Link to="" type="button" class="" data-toggle="modal" data-target="#exampleModalCenter">
                                            view details
                                        </Link>
                                        <select name="" className="ml-2 form-control-sm">
                                            <option value="">Assign Room</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Walusimbi John</td>
                                    <td>1</td>
                                    <td>Single Room</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td>
                                        <Link to="" type="button" class="" data-toggle="modal" data-target="#exampleModalCenter">
                                            view details
                                        </Link>
                                        <select name="" className="ml-2 form-control-sm">
                                            <option value="">Assign Room</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Walusimbi John</td>
                                    <td>1</td>
                                    <td>Single Room</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td>
                                        <Link to="" type="button" class="" data-toggle="modal" data-target="#exampleModalCenter">
                                            view details
                                        </Link>
                                        <select name="" className="ml-2 form-control-sm">
                                            <option value="">Assign Room</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Walusimbi John</td>
                                    <td>1</td>
                                    <td>Single Room</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td>
                                        <Link to="" type="button" class="" data-toggle="modal" data-target="#exampleModalCenter">
                                            view details
                                        </Link>
                                        <select name="" className="ml-2 form-control-sm">
                                            <option value="">Assign Room</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                            <option value="1">Room A1</option>
                                        </select>
                                    </td>
                                </tr>




                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>

                    <ViewOrderDetails />
                </div>

                <div className="col-md-4">
                    <Anouncements />
                </div>

            </div>

        );
    }
}

export default NewOrders