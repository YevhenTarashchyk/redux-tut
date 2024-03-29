import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import * as phoneActions from '../../actions/Actions';
import BasketCard from '../basketCard/basketCard';
import { getPhoneById } from '../../selectors';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  renderFields() {
    const { phone } = this.props;

    const columnField = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory'
      ])
    )(phone);

    return columnField.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">{value}</div>
      </div>
    ));
  }

  renderContent = () => {
    const { phone } = this.props;
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img src={phone.image} alt={phone.name} className="img-thumbnail" />
          </div>
          <div className="col-md-6">{this.renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">{`${phone.price}$`}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  };

  renderSidebar = () => {
    const { phone, addPhoneToBasket } = this.props;
    return (
      <div>
        <p className="lead">Quick shop</p>
        <BasketCard />
        <div className="form-group">
          <h1>{phone.name}</h1>
          <h2>{`${phone.price} $`}</h2>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Back to store
        </Link>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={() => addPhoneToBasket(phone.id)}
        >
          Add to CARD
        </button>
      </div>
    );
  };

  render() {
    const { phone } = this.props;

    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">{phone && this.renderContent()}</div>
            <div className="col-md-3">{phone && this.renderSidebar()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  fetchPhoneById: phoneActions.fetchPhoneById,
  addPhoneToBasket: phoneActions.addPhoneToBasket
};

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.singlePhonePage.id)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Phone);

Phone.defaultProps = {
  phone: undefined
};
Phone.propTypes = {
  fetchPhoneById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  phone: PropTypes.object,
  addPhoneToBasket: PropTypes.func.isRequired
};
