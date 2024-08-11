import React from 'react';
import Item from './Component/Item';
import Products from './Data/Products.json'; 
const App = () => {
  return (
    <div>
      <Item products={Products.products} /> 
    </div>
  );
}

export default App;
