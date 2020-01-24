import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import { addSmurfs, deleteSmurf } from '../actions/index'

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            SmurfList / >

            <
            SmurfForm submit = { this.props.addSmurfs }
            />  < /
            div >
        );
    }
}

export default connect(null, { addSmurfs })(App);