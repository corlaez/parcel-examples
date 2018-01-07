import React from "react";
import { connect } from "react-redux";
import { getSay } from "../selectors";
import * as actionCreators from "../action-creators";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return {
    say: getSay(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

function Say(props) {
  return (
    <div>
      <h2>Hello from Redux</h2>
      <div>{props.say}</div>
      <button onClick={props.updateSay}>Update</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Say);
