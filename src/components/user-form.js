import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import {AddBoxOutlined, Delete, Update} from "@material-ui/icons";
import {Input, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {compose} from "redux";
import {deleteUser, fetchUsers, updateUser} from "../actions/initialActions";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: this.props.initialData.user.avatar,
            first_name: this.props.initialData.user.first_name,
            last_name: this.props.initialData.user.last_name,
            email: this.props.initialData.user.email,
            newValue: ""
        };
        this.onInputChange = this.onInputChange.bind(this);

    }

    // static getDerivedStateFromProps(props, state){
    //     console.log(props);
    //     console.log(state);
    //     return setState({
    //         uAvatar: props.data.avatar,
    //         uFirstName: props.data.first_name,
    //         uLastName: props.data.last_name,
    //         uEmail: props.data.email
    //     })
    // }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target)

    }


    render() {
        console.log(this.state)
        return (
            <form noValidate autoComplete="off">
                <Input id="standard" name="avatar" label="Avatar URL" value={this.state.avatar}
                       onChange={this.onInputChange}/>
                <br/>
                <TextField id="standard" name="first_name" label="First Name"
                           value={this.state.first_name}
                           onChange={this.onInputChange}/>
                <br/>
                <Input id="standard" name="last_name" label="Last Name" value={this.state.last_name}
                       onChange={this.onInputChange} />
                <br/>
                <Input id="standard" name="email" label="Email" value={this.state.email} onChange={this.onInputChange}/>
            </form>
        );
    }
}

const mapStateToProps = state => {
    if (state.initialData.users !== null) {
        return state
    } else {
        return {};
    }
}
export default connect(mapStateToProps, compose({updateUser}))(UserForm);


