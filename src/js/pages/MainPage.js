import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from 'react-redux';

export default class MainPage extends React.Component {
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { localCounter: state.calc.counter };
}

export default connect(mapStateToProps, {})(MainPage);
