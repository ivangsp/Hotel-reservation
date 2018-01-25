import React, { Component } from 'react';

class FormSelection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <select class="form-control form-control-sm">
                <option>{this.props.val}</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
            </select>
        );
    }
}

export default  FormSelection