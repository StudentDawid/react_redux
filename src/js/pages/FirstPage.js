import React from "react";
import { addCalc } from '../actions/index';
import { connect } from 'react-redux';

export default class FirstPage extends React.Component {
  toggleAdd() {
    this.props.addCalc(5);
  };

  render() {
    return (
      <div>
        First Page
        <br></br>
        <button onClick={this.toggleAdd.bind(this)}>ADD 5</button>
      </div>
    );
  }
}

export default connect(null, { addCalc })(FirstPage);
