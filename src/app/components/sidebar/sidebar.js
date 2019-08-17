import React from 'react';

import BasketCard from '../basketCard/basketCard';
import Search from '../search/search';
import Categories from '../categories/categories';

const Sidebar = () => {
  return (
    <div>
      <BasketCard />
      <Search />
      <Categories />
    </div>
  );
};

export default Sidebar;
