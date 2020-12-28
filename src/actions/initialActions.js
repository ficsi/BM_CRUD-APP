import {USERS_URL} from "../CONSTANTS";

const url = USERS_URL;

export const fetchUsers = () => async dispatch => {

    await fetch(url)
        .then(res => res.json())
        .then(users => {
            return dispatch({
                type: "FETCH_ALL_USERS",
                payload: users
            });

        })
        .catch(err => {
            console.log("Error Reading data ->" + err);
        });
};

export const deleteUser = (index) => dispatch => {
    console.log(url + `/${index + 1}`)
    fetch(url + `/${index + 1}`, {
        method: 'DELETE',
    })
        .then(res => res.toString())
        .then(users => {
            console.log(users)
            return dispatch({
                type: "DELETE_USER",
                payload: index
            });

        })
        .catch(err => {
            console.log("Error Reading data ->" + err);
        });
}

export const editUser = (index) => dispatch => {
    return dispatch({
        type: "UPDATE_USER",
        payload: index
    }), console.log(index);
}

export const updateUser = (index) => dispatch => {
    fetch(url + `/${index + 1}`, {
        method: 'PATCH',
    })
        .then(res => res.toString())
        .then(users => {
            console.log(index);
            console.log();

            return dispatch({
                type: "UPDATE_USER",
                payload: index
            }), console.log(index);

        })
        .catch(err => {
            console.log("Error Reading data ->" + err);
        });
}


export const addUser = () => dispatch => {
    fetch(url, {
        method: 'POST',
    })
        .then(res => res.toString())
        .then(user => {
            return dispatch({
                type: "DELETE_USER",
                payload: user
            });

        })
        .catch(err => {
            console.log("Error Reading data ->" + err);
        });
}