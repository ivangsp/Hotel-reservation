import  * as Types from '../actions/Types'

import moment from 'moment'

const BookingReducer = (state = {
    checkInDate: moment(),
    checkOutDate:moment().add(1, "days"),
    noRooms:1,
    noGuests:1,
    roomType:'',
    cab:false,
    room:{},
    user:{},
    paid:false,
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

}, action) => {
    switch (action.type) {

        case Types.checkIn:
            state = {
                ...state,
                checkInDate: action.payload
            };
            break;
       case Types.checkOut:
            state = {
                ...state,
                checkOutDate: action.payload
            };
            break;
       case Types.numRooms:
            state = {
                ...state,
                noRooms: action.payload
            };
            break;
       case Types.numGuests:
            state = {
                ...state,
                noGuests: action.payload
            };
            break;

       case Types.room:
            state = {
                ...state,
                room: action.payload
            };
            break;

       case Types.cab:
            state = {
                ...state,
                cab: action.payload
            };
            break;
       case Types.user:
            state = {
                ...state,
                user: action.payload
            }

       case Types.paid:
            state = {
                ...state,
                paid: action.payload
            }
    }



    return state;
};

export default BookingReducer;