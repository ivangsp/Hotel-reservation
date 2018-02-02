import {connect} from 'react-redux'

import {setActiveTab} from "../actions/AdminActions";
import Admin from '../components/Back-end/Admin/Admin'
import AdminReducer from "../reducers/AdminReducer"

const mapStateToProps = (state) => {


    return {
        activeTab: state.AdminReducer.activeTab,
        booking: state.BookingReducer


    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveTab:(tab)=>{
            dispatch(setActiveTab(tab))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);