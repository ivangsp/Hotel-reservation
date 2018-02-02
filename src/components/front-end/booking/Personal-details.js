import React, {Component} from 'react';
import InfoWindow from './Info-Window';
import Form from './Form';
import PaymentSummary from './Payment-Summary'

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <InfoWindow  title="Personal Details" msg="We need your personal details to complete the booking
                                . Kindly do fill in the form below and also confirm that the room, number of guests
                                and dates selected are correct. Once all is well, click Confirm Booking to proceed
                                with your reservation." />

                        <Form  onBook={(value) => this.props.onBook(value)} setUser={(user) => this.props.setUser(user)}/>
                    </div>

                    <div className="col-md-4">
                        <PaymentSummary bookingDetails={this.props.bookingDetails}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default  PersonalDetails