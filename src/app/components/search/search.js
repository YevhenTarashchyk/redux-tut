import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchPhone } from '../../actions/Actions';

class Search extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchPhone(this.state.value);
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick shop</h3>
        <div className="input-group">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
            />
          </form>
          <span className="input-group-btn">
            <button
              type="submit"
              className="btn btn-default"
              onClick={this.handleSubmit}
            >
              <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchPhone
};

export default connect(
  null,
  mapDispatchToProps
)(Search);

Search.propTypes = {
  searchPhone: PropTypes.func.isRequired
};
