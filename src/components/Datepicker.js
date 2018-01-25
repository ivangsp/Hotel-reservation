import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class Datepicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: this.props.startDate,
            enDate: moment(this.startDate).add(1, "days")
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(date) {
        this.setState({
            startDate: date,
        });
    }

    render(){


        return(
            <DatePicker
                selected={this.state.startDate}
                dateFormat="DD-MM-YYYY"
                onChange={this.handleChange}
                minDate={moment()}
                placeholderText="Select a date between today and 5 days in the future"
            />
        );
    }
}

export default  Datepicker
