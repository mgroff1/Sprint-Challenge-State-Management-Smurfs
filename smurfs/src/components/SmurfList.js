import React from "react";
import { getSmurfs } from "./../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return ( <
                div >
                <
                h1 > Loading Smurfs... < /h1> < /
                div >
            );
        }
        return ( <
            div >
            <
            img className = "smurf-logo"
            src = { require("./logo-smurfs.png") }
            alt = "Smurf logo" /
            >
            <
            div className = "Smurfs--test" >
            <
            div className = "Smurfs" > {
                this.props.smurfs.map(smurf => {
                    return <Smurf key = { smurf.id }
                    smurf = { smurf }
                    />;

                })
            } <
            /div> < /
            div > <
            /div>
        );
    }
}

const mapStateToPops = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    };
};

export default connect(
    mapStateToPops, { getSmurfs }
)(SmurfList);