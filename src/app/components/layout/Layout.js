import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../sidebar/sidebar';

const Layout = ({ children }) => (
  <div className="view-container">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export default Layout;
