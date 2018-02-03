import  React, {Component} from 'react'
import moment from 'moment'

class PaymentSummary extends Component{
    constructor(props){
        super(props);
        this.total = 0

    }


    render(){
        const room   = JSON.parse(this.props.bookingDetails.room);
        const roomType = room.type;
        const fee       = room.fee;
        this.total     = room.fee * (this.props.bookingDetails.noRooms);
        const noRooms   = this.props.bookingDetails.noRooms;
        const cab       = this.props.bookingDetails.cab;

        //if option for cab is selected
        cab? this.total=this.total+30: this.total

        
        return(
            <div className="total-summary">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-center">SUMMARY</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <i className="pl-3 fa fa-bed" aria-hidden="true" />
                    </div>
                    <div className="col-md-8">
                        <small className="pl-3">Adults: {this.props.bookingDetails.noGuests}</small>
                        <br/>
                        <small className="pl-3">No of Rooms: {this.props.bookingDetails.noRooms}</small>
                        <br/>
                        <small className="pl-3"><b>check-in: {moment(this.props.bookingDetails.checkInDate).format('LL')}</b></small>
                        <br/>
                        <small className="pl-3"><b>check-out: {moment(this.props.bookingDetails.checkOutDate).format('LL')}</b></small>
                    </div>
                </div>
                <div className="col-md-12"> </div>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Room Details</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td scope="row">{roomType}</td>
                                <td>USD {fee} </td>

                            </tr>
                            {(cab)?
                                <tr>
                                    <td scope="row">Cab</td>
                                    <td>USD 30 </td>
                                </tr>
                                :null
                            }

                            <tr>
                                <td scope="row">Rooms</td>
                                <td>{noRooms} </td>

                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>USD 0.0 </td>
                            </tr>
                            <tr className="">
                                <td><b>Total</b></td>
                                <td><b>USD {this.total} </b></td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default  PaymentSummary