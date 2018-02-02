import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class Datepicker extends Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(date) {
        this.props.changeDate(date)
    }

    render(){


        return(
            <div>
                <DatePicker
                    selected={this.props.startDate}
                    dateFormat="DD-MM-YYYY"
                    onChange={this.handleChange}
                    minDate={moment()}
                    placeholderText="Select a date between today and 5 days in the future"
                />
            </div>

        );
    }
}

export default  Datepicker
