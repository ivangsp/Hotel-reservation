import React, {Component} from 'react'


class Announcements extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(

            <div className="card mb-3">
                <div className="card-header">
                    <i className="fa fa-bell-o"></i> Announcements</div>
                <div className="list-group list-group-flush small">
                    <a className="list-group-item list-group-item-action" href="#">
                        <div className="media">
                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                            <div className="media-body">
                                <strong>David Miller</strong> sent an inquiry  message
                                <div className="text-muted smaller">Today at 5:43 PM - 5m ago</div>
                            </div>
                        </div>
                    </a>

                    <a className="list-group-item list-group-item-action" href="#">
                        <div className="media">
                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                            <div className="media-body">
                                <strong>Jeffery Welling</strong> in room A1 his booking will expiring
                                <div className="text-muted smaller">Today at 4:31 PM - 1hr ago</div>
                            </div>
                        </div>
                    </a>

                    <a className="list-group-item list-group-item-action" href="#">
                        <div className="media">
                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                            <div className="media-body">
                                <strong>Jeffery Welling</strong> in room A1 his booking will expiring
                                <div className="text-muted smaller">Today at 4:31 PM - 1hr ago</div>
                            </div>
                        </div>
                    </a>
                    <a className="list-group-item list-group-item-action" href="#">
                        <div className="media">
                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="" />
                            <div className="media-body">
                                You have to pick up <strong>Isaac Newton</strong> at the airport
                                <div className="text-muted smaller">Tomorrow at 4:37 PM </div>
                            </div>
                        </div>
                    </a>

                    <a className="list-group-item list-group-item-action" href="#">View all announcements...</a>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        );
    }
}

export default Announcements