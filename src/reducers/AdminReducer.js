import  * as Types from '../actions/Types'
const AdminReducer = (state = {
    activeTab:"dashboard"
}, action) => {
    switch (action.type) {

        case Types.activeTab:
            state = {
                ...state,
                activeTab: action.payload
            };
            break;
    }
    return state;
};

export default AdminReducer;