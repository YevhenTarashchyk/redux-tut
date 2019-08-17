import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import * as phoneActions from '../../actions/Actions';
import { getPhones } from '../../selectors';
import Layout from '../layout/Layout';

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
    this.props.fetchCategories();
  }

  renderPhone = (phone, index) => {
    const shortDescription = `${R.take(60, phone.description)}...`;
    const { addPhoneToBasket } = this.props;
    return (
      <div className="col-md-4 col-lg-4 col-sm-4 book-list" key={index}>
        <div className="thumbnail">
          <img src={phone.image} alt={phone.name} className="img-thumbnail" />
          <div className="caption">
            <h4 className="pull-right">{`$${phone.price}`}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
            </h4>
            <p>{shortDescription}</p>
            <p className="itemButton">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => addPhoneToBasket(phone.id)}
              >
                Buy now!
              </button>
              <Link to={`/phones/${phone.id}`} className="btn btn-default">
                More Info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { phones, loadMorePhones } = this.props;
    return (
      <Layout>
        <div className="books row">
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              onClick={loadMorePhones}
              className="pull-right btn btn-primary"
              type="button"
            >
              Load More
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  fetchPhones: phoneActions.fetchPhones,
  loadMorePhones: phoneActions.loadMorePhones,
  addPhoneToBasket: phoneActions.addPhoneToBasket,
  fetchCategories: phoneActions.fetchCategories
};

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Phones);

Phones.propTypes = {
  fetchPhones: PropTypes.func.isRequired,
  phones: PropTypes.array.isRequired,
  loadMorePhones: PropTypes.func.isRequired,
  addPhoneToBasket: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};
