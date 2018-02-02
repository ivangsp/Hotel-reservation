import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Datepicker from '../booking/Datepicker'
import moment from 'moment';

import  FormSelection from '../booking/Form-selection'


class LandingPage extends  Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="container-fluid landingpage-img">
                <div className="row">
                    <div className="col-md-3 offset-md-1 mt-5 col-xs-0 ">
                       <div className="reservation-dialog">
                           <form >
                             <div className="form-row row">
                                 <div className="col-md-6 col-xs-6">
                                     <label><i className="fa fa-calendar-o"></i> Check-in</label>
                                     <Datepicker startDate={moment()} />
                                 </div>
                                 <div className="col-md-6 col-xs-6">
                                     <label><i className="fa fa-calendar-o"></i> Check-out</label>
                                     <Datepicker startDate={moment().add(1, "days")} />
                                 </div>
                             </div>

                               <div className="row mt-3 ">
                                   <div className="col-md-2"><i className="fa fa-bed" aria-hidden="true"> </i></div>
                                   <div className="col-md-4 "> <b className="">Rooms</b> </div>
                                   <div className="col-md-6 col-sm-6" ><FormSelection  val={1}/></div>
                               </div>

                               <div className="form-row mt-3">
                                   <div className="form-group col-md-6">
                                       <label><i className="fa fa-male"></i> Adults</label>
                                       <input type="number" value={1} className="form-control"  />
                                   </div>
                                   <div className="form-group col-md-6">
                                       <label><i className="fa fa-child"></i> Kids</label>
                                       <input type="number" value={0} className="form-control"  />
                                   </div>
                               </div>

                               <div className="form-group col-md-12">
                                   <label htmlFor="exampleInputPassword1" className="label">Coupon Code</label>
                                   <input type="numeric" value="" className="form-control" id="exampleInputPassword1" />
                               </div>

                               <Link to="/booking" type="submit" className="btn btn-danger btn-bgcolor col-md-12">
                                   Search</Link>
                           </form>
                       </div>
                    </div>

                </div>

            </div>
        );
    }
}



export default LandingPage