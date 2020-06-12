import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {logout} from './actions';
import {Redirect} from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(
    withConnect
)(Logout);
