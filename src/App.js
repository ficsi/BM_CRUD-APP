import React, {Component} from "react";
import "./App.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchUsers} from './actions/initialActions';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UsersList from "./components/users-list";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <div className="App">
                <UsersList></UsersList>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return state;
}
export default connect(mapStateToProps, compose({fetchUsers}))(App);

