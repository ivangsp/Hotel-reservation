import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <p class=""><i className="fa fa-map-marker w3-text-red"></i> 423 Some adr, Chicago, US</p>
                        <p class=""><i className="fa fa-phone w3-text-red"></i> Phone: +00 151515</p>
                        <p class=""><i className="fa fa-envelope w3-text-red"></i> Email: mail@mail.com</p>
                    </div>

                    <div className="col-md-8">
                        <div id="googlemap"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default  ContactUs ;
