import React, {Component} from 'react'

class ViewOrderDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Client's details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col">
                                    <p><b>Name:</b>John Walusimbi</p>
                                    <p><b>Number of Rooms:</b> 1</p>
                                    <p><b>Email:</b> john@outlook.com</p>
                                    <p><b>Country: </b> uganda</p>
                                    <p><b>Checkin date:</b> 23-10-2018</p>
                                    <p><b>Checkin date:</b> 24-10-2018</p>
                                    <p><b>Checkin date: </b> Business</p>
                                    <p><b>AirportCab:</b> No</p>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default ViewOrderDetails