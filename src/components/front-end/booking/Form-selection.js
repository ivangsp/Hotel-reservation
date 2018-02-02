import React, { Component } from 'react';

class FormSelection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <select className="form-control form-control-sm" onChange={(e) => this.props.handleChange(e.target.value)}>
                <option>{this.props.val}</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        );
    }
}

export default  FormSelection