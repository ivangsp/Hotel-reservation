import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class LandingPage extends  Component {

    constructor(props){
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment()
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(date) {
        this.setState({
            startDate: date,
        });
    }

    render(){
        return(
            <div className="container-fluid landingpage-img">
                <div className="row">
                    <div className="col-md-3 offset-md-1 ">
                        <div className="col-md-12 mgn0"><p className="btn btn-danger header-dialog">Make a Reservation </p> </div>
                       <div className="reservation-dialog">
                           <form >
                             <div className="form-row">
                                 <div className="col-md-6">
                                     <label><i class="fa fa-calendar-o"></i> Check In</label>
                                     <DatePicker
                                         dateFormat="DD-MM-YYYY"
                                         selected={this.state.startDate}
                                         onChange={this.handleChange}
                                     />
                                     {/*<input type="text" className="form-control" id="exampleInputEmail1" />*/}
                                 </div>
                                 <div className="col-md-6">
                                     <label><i class="fa fa-calendar-o"></i> Check In</label>
                                     <DatePicker
                                         dateFormat="DD-MM-YYYY"
                                         selected={this.state.endDate}
                                         />
                                 </div>
                             </div>

                               <div className="form-row">
                                   <div className="form-group col-md-12">
                                       <label > <i className="fa fa-bed pr-1" aria-hidden="true"></i>Rooms</label>
                                       <input type="numeric" className="form-control" value="1" />
                                   </div>
                               </div>

                               <div className="form-row">
                                   <div className="form-group col-md-6">
                                       <label><i class="fa fa-male"></i> Adults</label>
                                       <input type="number" value={1} className="form-control"  />
                                   </div>
                                   <div className="form-group col-md-6">
                                       <label><i class="fa fa-child"></i> Kids</label>
                                       <input type="number" value={0} className="form-control"  />
                                   </div>
                               </div>

                               <div class="form-group col-md-12">
                                   <label for="exampleInputPassword1" className="label">Coupon Code</label>
                                   <input type="numeric" value={0} class="form-control" id="exampleInputPassword1" />
                               </div>

                               <button type="submit" class="btn btn-danger header-dialog col-md-12">Book Now</button>
                           </form>
                       </div>
                    </div>

                </div>

            </div>
        );
    }
}


export default LandingPage