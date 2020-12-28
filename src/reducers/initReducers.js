import {FETCH_ALL_USERS, DELETE_USER, UPDATE_USER, EDIT_USER} from "../actions/types";

const INITIAL_STATE = {
    users: null,
    user: null,
    isFetched: false,
    show: false,
    isBtnAdd: false,
    selectedUser: null
};

function initialReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "FETCH_ALL_USERS":
            console.log("...FETCH_ALL_USERS");
            return {
                ...state,
                isFetched: true,
                users: action.payload.data
            };
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((user, index) => index !== action.payload)
            }
        case "UPDATE_USER":
            console.log('updating...');
            console.log(state.users[action.payload])
            return {
                ...state,
                show: true,
                isBtnAdd: true,
                selectedUser: action.payload.data,
                user: state.users[action.payload]
            }
        case "EDIT_USER":
            return {
                ...state,
                show: true,
                isBtnAdd: true,
                selectedUser: action.payload.data,
                user: state.users[action.payload]
            }
        default:
            return state;
            break;
    }
}

export default initialReducer;
