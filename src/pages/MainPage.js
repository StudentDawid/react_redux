import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from 'react-redux';
import { addCalc } from '../actions/index';
import ReactInterval from 'react-interval';

export default class MainPage extends React.Component {
  toggleAdd() {
    this.props.addCalc(5);
  }

  render() {
    return (
      <div>
        <h1>React Test</h1><br></br>
        <IndexLink to="/"> firstpage </IndexLink>   <Link to="secondpage"> secondpage </Link><br></br>

        <br></br>
        <br></br>

        {this.props.children}

        <br></br>
        <br></br>

        Counter = {this.props.localCounter}
        <ReactInterval timeout={1000} enabled={true}
          callback={this.toggleAdd.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { localCounter: state.calc.counter };
}

export default connect(mapStateToProps, { addCalc })(MainPage);
