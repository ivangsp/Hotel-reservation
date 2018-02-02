import {connect} from 'react-redux'

import * as Action from "../actions/BookingActions";
import Booking from '../components/front-end/booking/Booking'

const mapStateToProps = (state) => {
    return {
        booking: state.BookingReducer
        ,


    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        setCheckInDate:(date)=>{
            dispatch(Action.setCheckInDate(date))
        },
        setCheckoutDate:(date)=>{
            dispatch(Action.setCheckoutDate(date))
        },
        setNumGuests:(guests)=>{
            dispatch(Action.setNumGuests(guests))
        },
        setNumRooms:(rooms)=>{
            dispatch(Action.setNumRooms(rooms))
        },

        setRoom:(room) =>{
            dispatch(Action.setRoom(room))
        },
        setCab: (cab) =>{
            dispatch(Action.setCab(cab))
        },
        setUser: (user) =>{
            dispatch(Action.setUser(user))
        },
        setPay: (pay) =>{
            dispatch(Action.setPay(pay))
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);