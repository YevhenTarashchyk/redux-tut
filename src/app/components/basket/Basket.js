import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import { getBasketPhonesWithCount, getTotalBasketPrice } from '../../selectors';
import * as phoneActions from '../../actions/Actions';

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout
}) => {
  const isBasketEmpty = R.isEmpty(phones);
  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>Your shoppong cart is empty</div>}
      <div className="table-responsive">
        <table className="table-bordered table-striped table-condensed cf">
          <tbody>
            {phones.map(phone => (
              <tr key={phone.id} className="item-checout">
                <td className="first-column-checkout">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="img-thumbnail"
                  />
                </td>
                <td>{phone.name}</td>
                <td>{`${phone.price}$`}</td>
                <td>{phone.count}</td>
                <td>
                  <button
                    type="button"
                    className="delete-cart"
                    onClick={() => removePhoneFromBasket(phone.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {R.not(isBasketEmpty) && (
        <div className="row">
          <div className="pull-right total-user-checkout">
            <b>Total:</b>
            {`${totalPrice}`}
          </div>
        </div>
      )}
    </div>
  );
  const renderSidebar = () => (
    <div>
      <Link to="/" className="btn btn-info">
        <span className="glyphicon glyphicon-info-sign" />
        <span>Continue shopping!</span>
      </Link>
      {R.not(isBasketEmpty) && (
        <div>
          <button
            type="button"
            onClick={cleanBasket}
            className="btn btn-danger"
          >
            <span className="glyphicon glyphicon-trash" />
            Clean cart
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => basketCheckout(phones)}
          >
            <span className="glyphicon glyphicon-envelope" />
            Checkout
          </button>
        </div>
      )}
    </div>
  );
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  };
};

const mapDispatchToProps = {
  removePhoneFromBasket: phoneActions.removePhoneFromBasket,
  cleanBasket: phoneActions.cleanBasket,
  basketCheckout: phoneActions.basketCheckout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);

Basket.propTypes = {
  phones: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removePhoneFromBasket: PropTypes.func.isRequired,
  cleanBasket: PropTypes.func.isRequired,
  basketCheckout: PropTypes.func.isRequired
};
