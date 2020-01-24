import React, { Component } from "react";
import SmurfForm from "./SmurfForm";
import { connect } from "react-redux";
import { deleteSmurf } from '../actions'

class Smurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false
        };
    }
    deleteSmurf = (e, id) => {
        e.preventDefault();
        this.props.deleteSmurf(id);
    }

    render() {
        return ( <
            div className = "smurf-container" >
            <
            div className = "Smurf" >
            <
            h3 > { this.props.smurf.name } < /h3> <
            strong > { this.props.smurf.height }
            tall < /strong> <
            p > { this.props.smurf.age }
            smurf years old < /p>

            <
            button className = "delete"
            onClick = {
                (e, id) =>
                this.props.deleteSmurf(e, id)
            } > X < /button>

            {
                this.state.updating && ( <
                    SmurfForm smurf = { this.props.smurf }
                    submit = { this.props.editSmurf }
                    />
                )
            } <
            /div> < /
            div >
        );
    }
}
const mapStateToProps = state => {
    return {
        updating: state.updating
    }
}


export default connect(mapStateToProps, { deleteSmurf })(Smurf)