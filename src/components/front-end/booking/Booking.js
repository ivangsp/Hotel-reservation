import React, {Component} from 'react';
import moment from 'moment';



import NavBar from '../NavBar';
import Datepicker from './Datepicker'
import Footer from '../Footer';
import RoomSelected from './Room-selection';
import FormSelection from './Form-selection'
import PersonalDetails from './Personal-details'
import MakePayment from './MakePayment'
import '../../../css/booking.css';
import {roomType} from "../../../actions/Types";

class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progressBar: '33%',
            activeTab:'listing',
            rooms:[
                {'id': 1,
                'type': 'SINGLE ROOM',
                 'fee': 100
                },

                {'id': 12,
                    'type': 'DOUBLE ROOM',
                    'fee': 120
                },

                {'id': 3,
                    'type': 'DELUX ROOM',
                    'fee': 180
                }
            ],

            showCheckinDates:true
        }

    }

    componentWillMount(){
        const rooms = this.props.booking.rooms
        for (const i in rooms ){
            if(rooms[i].type === this.props.match.params.id){
                console.log('selected', rooms[i]);
                this.setState({
                    rooms: [rooms[i]]
                })
            }
        }
    }



    setActiveTab(tab) {
        switch (tab){
            case 'listing':
                this.setState({progressBar: '33%', activeTab:tab})
             break
            case 'booking':
                this.setState({progressBar: '66%', activeTab:tab, showCheckinDates: false})
                break
            case 'payment':
                this.setState({progressBar: '100%', activeTab:tab, showCheckinDates: false })
                break
        }


    }
    showTab(){
        const tab = this.state.activeTab
        const rooms = this.state.rooms

        switch (tab){
            case 'listing':
               return <div>
                   {rooms.map((room , key)=>{
                       return <RoomSelected room={room} key={key} onBook={(value) => this.setActiveTab(value)}
                       setRoom ={(room) => this.props.setRoom(room)}
                       setCab  = {(cab) => this.props.setCab(cab)}
                       cab = {this.props.booking.cab}/>

                   })}
               </div>
                break
            case 'booking':
                 return ( <div className=""><PersonalDetails onBook={(value) => this.setActiveTab(value)}
                            bookingDetails={this.props.booking} setUser={(user) => this.props.setUser(user)}/></div>)

                break
            case 'payment':

                return (
                    <div className="row">
                    <MakePayment bookingDetails={this.props.booking} setPay={(pay) => this.props.setPay(pay)}/>
                    </div>)
                break
        }


    }

    render() {
        console.log("statet", this.props);
        return (
            <div className="mainContainer">
                <NavBar />
                <div className="container-fluid ">
                    <div className="col-md-10 offset-1">
                        {this.state.showCheckinDates?
                            <div className="row selected-date">
                                <div className="col-md-3">
                                    CHECK-IN
                                    <Datepicker startDate={this.props.booking.checkInDate} changeDate={(date) => this.props.setCheckInDate(date)}/>
                                </div>
                                <div className="col-md-3">
                                    CHECK-OUT

                                    <Datepicker startDate={this.props.booking.checkOutDate} changeDate={(date) => this.props.setCheckoutDate(date)}/>
                                </div>

                                <div className="col-md-2 no-rooms">
                                    <p>ROOMS
                                        <FormSelection val={this.props.booking.noRooms}
                                                       handleChange={(num) => this.props.setNumRooms(num)}/>
                                    </p>
                                </div>

                                <div className="col-md-2 no-rooms">
                                    <p>GUESTS
                                        <FormSelection val={this.props.booking.noGuests}
                                                       handleChange={(num) => this.props.setNumGuests(num)}/>
                                    </p>
                                </div>


                                <div className="col-2 no-rooms">
                                    <p>CHILDREN
                                        <FormSelection val={0}/>
                                    </p>
                                </div>
                            </div>

                            :null}

                        <div className="row selection">
                            <div className="col-4"><p><b>1. Room selection</b></p></div>
                            <div className="col-4"><p>2. Booking Details</p></div>
                            <div className="col-4"><p>3. Make Payment</p></div>
                        </div>

                        <div className="row mb-3">
                            <div className="progress col-md-12">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                     role="progressbar" aria-valuenow={this.state.progressBar} aria-valuemin="0"
                                     aria-valuemax="100" style={{width: this.state.progressBar}}>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 ">



                                {this.showTab()}


                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Booking;
