import React, { Component } from 'react';
import facebookicon from '../../images/facebook-logo.svg'
import  twittericon from '../../images/twitter-logo.svg'
import  histagram from '../../images/instagram-logo.svg'


class Footer extends Component {
    render() {
        return (
            <div className="row footer">
                <div className="col-md-4 text-left">
                    <h3 className="pt-2 pl-3">About Jaffer apartments</h3>
                    <p className="p-3">Jaffer apartments hotel is world class hotel you a true definition of comfort, hospitality and
                        serving you right from our hearts. We are located 5km away from the city and 15km away from
                        the airport.
                    </p>
                </div>
                <div className="col-md-4 text-left">
                    <h3 className="pt-2">Contact us</h3>
                    <p className="p-2">
                        Plot 24 Salama Rd <br/>
                        Tel: +256-414-344-555/ +256-032-789-666 <br/>
                        Mob: +256-414-344-555(Duty manager) <br/>
                        Email: reservation@hotelname.com.
                    </p>
                </div>
                <div className="col-md-4">
                    <h3 className="p-2">Connect with us on</h3>
                    <p>
                        <img className="social-icon" src={facebookicon} />
                        <img className="social-icon"  src={twittericon} />
                        <img  className="social-icon"  src={histagram} />
                    </p>
                </div>
            </div>

        );
    }
}

export default Footer;
