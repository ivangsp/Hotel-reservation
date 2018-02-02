import React, {Component} from 'react'

class BreadCrumb extends  Component{

    render(){
        return(
            <div className="row mt-5">
                <div className="col-md-12">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a onClick={() => this.props.changeTab('dashboard')} href=''>Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">{this.props.activeTab}</li>
                    </ol>
                </div>

            </div>

        )
        {console.log("Active tab", this.props.activeTab)}
    }

}
export default BreadCrumb