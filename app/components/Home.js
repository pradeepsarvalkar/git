import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return <div></div>;
  }
}

function select(state) {
  return {
    data: state,
  };
}

export default connect(select)(Home);
