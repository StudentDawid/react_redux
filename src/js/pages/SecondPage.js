import React from "react";
import { removeCalc } from '../actions/index';
import { connect } from 'react-redux';

export default class SecondPage extends React.Component {
  toggleAdd() {
    this.props.removeCalc(5);
  };

  render() {
    return (
      <div>
        Second Page
        <br></br>
        <button onClick={this.toggleAdd.bind(this)}>REMOVE 5</button>
      </div>
    );
  }
}

export default connect(null, { removeCalc })(SecondPage);
