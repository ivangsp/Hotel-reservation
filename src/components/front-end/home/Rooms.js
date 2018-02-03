import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import  single_room from '../../../images/room_single.jpg'
import  double_room from '../../../images/room_double.jpg'
import  delux_room from '../../../images/room_deluxe.jpg'
class Rooms extends Component {

    constructor(props){
        super(props);
        this.state ={
            rooms:[
                {'id': 1,
                    'type': 'SINGLE ROOM',
                    'fee': 100,
                    'bed': 'single bed',
                    'imgurl': single_room,
                },

                {'id': 12,
                    'type': 'DOUBLE ROOM',
                    'fee': 120,
                    'bed': 'Double bed',
                    'imgurl': double_room
                },

                {'id': 3,
                    'type': 'DELUX ROOM',
                    'fee': 180,
                    'bed': 'Double bed',
                    'imgurl': delux_room
                }
            ]
        }
    }


    render() {

        return (
            <div className="container-fluid" id="rooms">
                <div className="row ">

                    <div className="card-deck">
                        {this.state.rooms.map((room , key)=>{
                            const url = "/booking/"+room.type
                            return(
                                <div className="card col-md-4" key={key}>
                                    <img className="card-img-top" src={room.imgurl} alt="single room" />
                                    <div className="card-body text-left">
                                        <h5 className="card-title"> {room.type}</h5>
                                        <p className="card-text">From $ {room.fee}</p>
                                        <p className="card-text">{room.bed}</p>
                                        <p>15m<sup>2</sup></p>
                                        <p><i className="fa fa-bath"></i> <i className="fa fa-phone"></i> <i className="fa fa-wifi"></i></p>
                                        <div className="card-footer bg-transparent ">
                                            <Link to={url} className="btn btn-outline-success btn-md btn-block">Choose Room</Link>
                                        </div>
                                    </div>
                                </div>
                            )})
                        }

                    </div>
                </div>

            </div>
        );
    }
}

export default Rooms;
