import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <Link className="navbar-brand" to="/">Hotel system</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <a  className="nav-link" onClick={() => this.props.changeTab('dashboard')} >
                                <i className="fa fa-tachometer" aria-hidden="true" />
                                <span className="nav-link-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                            <a   className="nav-link" onClick={() => this.props.changeTab('New orders')}>
                                <i className="fa fa-shopping-cart" />
                                <span className="nav-link-text">New Orders
                                    {this.props.newBooking? <small className="badge">1 New!</small> : null}
                                </span>
                            </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                            <Link className="nav-link" to="">
                                <i className="fa fa-envelope-o" />
                                <span className="nav-link-text" >Messages</span>
                            </Link>
                        </li>

                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                            <Link className="nav-link" to="">
                                <i className="fa fa-bar-chart" />
                                <span className="nav-link-text" >Sales</span>
                            </Link>
                        </li>

                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                            <Link className="nav-link" to="">
                                <i className="fa fa-user" aria-hidden="true" />
                                <span className="nav-link-text" >Users</span>
                            </Link>
                        </li>


                    </ul>

                    <ul className="navbar-nav sidenav-toggler">
                        <li className="nav-item">
                            <Link to="" className="nav-link text-center" id="sidenavToggler">
                                <i className="fa fa-fw fa-angle-left"></i>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">


                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Search for..." />
                                    <span className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </span>

                                </div>
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                                <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
export default NavBar