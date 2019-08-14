import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPhoneById } from '../../actions/Actions';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props);
  }

  render() {
    return <div>Phone</div>;
  }
}
const mapDispatchToProps = {
  fetchPhoneById
};
export default connect(
  null,
  mapDispatchToProps
)(Phone);

Phone.propTypes = {
  fetchPhoneById: PropTypes.func.isRequired
};
