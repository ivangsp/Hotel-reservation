import React, {Component} from 'react';
import NavBar from '../Navbar';
import  BreadCrumbs from './BreadCrumb';
import CheckInClients from './CheckInClients';
import IconCards from './IconCards';
import Footer from './Footer'
import NewOrders from './NewOrders'
import '../../../css/back-end/sb-admin.css'
import '../../../css/back-end/admin.css'

class Admin extends Component{
    constructor(props){
        super(props);

    }

    content(){
        switch(this.props.activeTab){
            case 'New orders':
                return(<NewOrders />)

                break
            case 'dashboard':
                return(
                    <div>
                        <IconCards  changeTab={(name)=> this.props.setActiveTab(name)} />
                        <CheckInClients />
                    </div>
                )
                break


        }
    }

    render(){

        return(
            <div className="content-wrapper">

                <div className="container-fluid">
                    <NavBar  changeTab={(name)=> this.props.setActiveTab(name)}  newBooking={this.props.booking} />
                    <BreadCrumbs  activeTab={this.props.activeTab} changeTab={(name)=> this.setActiveTab(name)} />
                    {this.content()}
                </div>

                <Footer />
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fa fa-angle-up" />
                </a>
            </div>
        );
    }
}

export default Admin