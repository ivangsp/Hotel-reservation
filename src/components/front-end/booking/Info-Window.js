import React, {Component} from 'react';

class InfoWindow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12 header-container">
                    <p> <i className="fa fa-bell" aria-hidden="true"></i>
                        <b> {this.props.title}</b></p>
                    <p> <small>
                        {this.props.msg}
                    </small>
                    </p>
                </div>
            </div>
        );
    }

}

export default InfoWindow