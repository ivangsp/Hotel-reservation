import * as Types from './Types'


export function setCheckInDate(date) {
    return {
        type: Types.checkIn,
        payload: date
    }
}
export function setCheckoutDate(date) {
    return {
        type: Types.checkOut,
        payload: date
    }
}
export function setNumGuests(guests) {
    return {
        type: Types.numGuests,
        payload: guests
    }
}
export function setNumRooms(rooms) {
    return {
        type: Types.numRooms,
        payload: rooms
    }
}


export function setRoom(room) {
    return {
        type: Types.room,
        payload: room
    }
}
export function setCab(cab) {
    return {
        type: Types.cab,
        payload: cab
    }
}
export function setUser(user) {
    return {
        type: Types.user,
        payload: user
    }
}
export function setPay(val) {
    return {
        type: Types.paid,
        payload: val
    }
}