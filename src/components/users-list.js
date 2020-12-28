import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchUsers, deleteUser, editUser} from "../actions/initialActions";
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
import UserForm from "./user-form.js";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        let currentUser = null;
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.setState(this.props.initialData);
        console.log(this.state)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isFetched !== this.props.initialData.isFetched) {
            this.setState(this.props.initialData);
        }
        if (prevState.users !== this.props.initialData.users) {
            this.setState(this.props.initialData);
        }
        if (prevState.show !== this.props.initialData.show) {
            this.setState(this.props.initialData);
        }
        if (prevState.isBtnAdd !== this.props.initialData.isBtnAdd) {
            this.setState(this.props.initialData);
        }
    }

    addUserEvent(i){
        this.setState({show: true});
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>List all users</h1>
                    {this.state.show && <UserForm data={this.state.users[this.currentUser]}/>}
                </header>
                {
                    Object.entries(this.state).length !== 0 ?
                        <React.Fragment>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddBoxOutlined/>}
                                onClick={()=>this.addUserEvent()}
                            >
                                {!this.state.show ? 'New User' : 'Add' }
                            </Button>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>User ID</TableCell>
                                            <TableCell align="right">Avatar</TableCell>
                                            <TableCell align="right">First name</TableCell>
                                            <TableCell align="right">Last name</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">Edit</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>

                                        {this.state.users.map((row, index) => (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="right" padding='none'>
                                                    <img src={row.avatar} alt="avatar"/>
                                                </TableCell>
                                                <TableCell align="right">{row.first_name}</TableCell>
                                                <TableCell align="right">{row.last_name}</TableCell>
                                                <TableCell align="right">{row.email}</TableCell>
                                                <TableCell align="right">
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="default"
                                                        startIcon={<Update/>}
                                                        onClick={() => (
                                                            this.currentUser = index,
                                                            <UserForm data={this.props.editUser(index)}/>
                                                        )}
                                                    >
                                                        Update
                                                    </Button>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="secondary"
                                                        startIcon={<Delete/>}
                                                        onClick={row => this.props.deleteUser(index)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>

                        </React.Fragment>
                        : 'loading...'

                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    if (state.initialData.users !== null) {
        // console.log(state)
        return state
    } else {
        return {};
    }
}
export default connect(mapStateToProps, compose({fetchUsers, deleteUser, editUser}))(UsersList);
