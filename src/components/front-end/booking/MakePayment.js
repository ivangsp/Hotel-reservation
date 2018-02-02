import React, {Component} from 'react';
import InfoWindow from './Info-Window';
import PaymentSummary from './Payment-Summary';
import PaymentDetails from './PaymentDetails'

import masterCardImg from '../../../images/master-card.png';
import visaCardImg from '../../../images/Visa.png';
import ezpesaImg from '../../../images/EZEEMONEY.png';
import mtn from '../../../images/Mtn.png';
import airtel from '../../../images/Airtel.png'
import pesaPal from '../../../images/PesaPal.png'

class MakePayment extends Component{
    constructor(props){
        super(props);
        this.state ={
            payment_method: 'mtn'
        }


    }

    changePaymentMethod(methodName){
        this.setState({
            payment_method: methodName
        })

    }

    showPayMentDetails(){
        switch(this.state.payment_method){
            case 'mtn':
                console.log("currentpayment-details", "mtn");
                return(<PaymentDetails  setPay ={this.props.setPay} />)
                break
            case 'airtel':
                return(<PaymentDetails  setPay ={this.props.setPay} />)
                break
            case 'mastercard':
                return(<PaymentDetails  setPay ={this.props.setPay} />)
                break
            case 'visa':
                return(<PaymentDetails  setPay ={this.props.setPay} />)
                break
            case 'ezpesa':
                return(<PaymentDetails  setPay ={this.props.setPay} />)
                break
        }
    }

    render(){
        console.log("currentmethod", this.state.payment_method);
        return(
            <div>
                <div className="row ">
                    <div className="col-md-8 ">
                        <InfoWindow title="Pay Now" msg="Thank you!, To complete your reservation, please proceed
                            with payment. please not you have 15minutes to complete the payment else your reservation
                            will be automatically cancelled"/>
                        <div className="row mt-2">
                            <p className="col-md-12"><b>choose payment option</b></p>
                            <div className="col-md-2 form-check" onClick={() => this.changePaymentMethod('mastercard')} >
                                <input className="form-check-input" type="radio" id="business" value='2' name="payment" />
                                <label className="form-check-label" htmlFor="business">
                                    <img src={masterCardImg} alt="pesapal"/>
                                </label>
                            </div>

                            <div className="col-md-2  form-check" onClick={() => this.changePaymentMethod('visa')}>
                                <input className="form-check-input" type="radio" id="business" name="payment" value='2'/>
                                <label className="form-check-label" htmlFor="business">
                                    <img src={visaCardImg} alt="pesapal"/>
                                </label>
                            </div>

                            <div className="col-md-2  form-check" onClick={() => this.changePaymentMethod('mtn')} >
                                <input className="form-check-input" type="radio" defaultChecked name="payment" value='2'/>
                                <label className="form-check-label" htmlFor="business">
                                    <img src={mtn} alt="pesapal"/>
                                </label>
                            </div>

                            <div className="col-md-2  form-check" onClick={() => this.changePaymentMethod('airtel')}>
                                <input className="form-check-input" type="radio" id="business" name="payment" value='2'/>
                                <label className="form-check-label" htmlFor="business">
                                    <img src={airtel} alt="airtel money"/>
                                </label>
                            </div>

                            <div className="col-md-2  form-check" onClick={() => this.changePaymentMethod('ezpesa')}>
                                <input className="form-check-input" type="radio" id="business" value='2' name="payment"/>
                                <label className="form-check-label" htmlFor="business">
                                    <img src={ezpesaImg} alt="ezpesa"/>
                                </label>
                            </div>

                        </div>
                        { this.showPayMentDetails()}
                    </div>
                    <div className="col-md-4">
                        <PaymentSummary bookingDetails={this.props.bookingDetails} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MakePayment