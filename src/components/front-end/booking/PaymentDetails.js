import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

class PaymentDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            submited: false
        }
    }

    redirect(){
        this.setState({submited: false});
        window.location= '/'
    }

    render(){
        return(
            <div className="row mt-2 personal-details">
                <div className="col-md-8 ">
                    {this.state.submited ?

                        <SweetAlert
                            success title="Good job!"
                            custom
                            confirmBtnText="OK"
                            confirmBtnBsStyle="primary"
                            customIcon="thumbs-up.jpg"
                            onConfirm={()=> this.redirect()}
                            onCancel={this.hideAlert} >
                            Thank you for paying, Your payment has been receivd
                        </SweetAlert>
                    : null}

                    <div className="card card-body personal-details ">
                        <p>Send MTN Money <b>Ush: 500000</b> to goods and service (others) options
                            <br/>
                            <b>Follow the following steps to finish the transaction</b></p>
                        <ul className="list-group personal-details">
                            <li className="list-group-item">1. Dial <b> *165#</b> </li>
                            <li className="list-group-item">2. Select payment</li>
                            <li className="list-group-item">3. select goods and services</li>
                            <li className="list-group-item">4. Enter <b>PESAPAL</b> as the mercant code <small>
                                (<b>PESAPAL</b> mustbe in capital Letters)</small> </li>
                            <li className="list-group-item">5. Enter Amount <b>Ush:880000</b></li>
                            <li className="list-group-item">6. Enter your pin and send</li>
                            <li className="list-group-item">7.You will receive a confirmation message with a
                                <b>Transaction ID</b> </li>
                            <li className="list-group-item">8. Enter the <b>Transaction ID</b> and
                                <b>Phone number in the form below</b></li>
                            <li className="list-group-item">9.click Finish to complete the transaction</li>
                        </ul>

                        <div className="form">
                            <div className="form-group">
                                <label> <b>phone number</b> </label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">+256</div>
                                    </div>
                                    <input type="number" className="form-control"
                                           placeholder="*** *** ***"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="t-id"><b>Transaction Id:</b></label>
                                <input type="text" className="form-control" id="t-id" placeholder="*** *** ***"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-danger mb-2 btn-bgcolor"
                                onClick={() => this.setState({submited: true})}>Complete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export  default PaymentDetails