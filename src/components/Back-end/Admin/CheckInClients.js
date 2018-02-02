import React, {Component} from 'react'
import  Anouncements from './Announcements'


class CheckInClients extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className=" col-md-8 card mb-3">
                    <div className="card-header">
                        <i className="fa fa-table" /> Checked-in clients</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>RoomNO</th>
                                    <th>Client's Name</th>
                                    <th>Check-in Date</th>
                                    <th>Check-out Date</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <th>RoomNO</th>
                                    <th>Client's Name</th>
                                    <th>Check-in Date</th>
                                    <th>Check-out Date</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                                <tbody>
                                <tr>
                                    <td>A1</td>
                                    <td>Walusimbi John</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td><a href="">Extend</a></td>
                                </tr>

                                <tr>
                                    <td>A1</td>
                                    <td>Walusimbi John</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td><a href="">Extend</a></td>
                                </tr>
                                <tr>
                                    <td>A1</td>
                                    <td>Walusimbi John</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td><a href="">Extend</a></td>
                                </tr>
                                <tr>
                                    <td>A1</td>
                                    <td>Walusimbi John</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td><a href="">Extend</a></td>
                                </tr>
                                <tr>
                                    <td>A1</td>
                                    <td>Walusimbi John</td>
                                    <td>23-01-2018</td>
                                    <td>30-01-2018</td>
                                    <td><a href="">Extend</a></td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>

                <div className="col-md-4">
                    <Anouncements />
                </div>

            </div>

        );
    }
}

export default CheckInClients