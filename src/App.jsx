import { useState } from 'react';
import './App.css';
import Navigation from './Component/Navigation';
import Header from './Component/Header';
import Cart from './Component/Cart';
import Footer from './Component/Footer';

const App = () => {
  const items = [
    { name: "Fancy Product", price: "$40.00 - $80.00", sale: false },
    { name: "Special Item", price: "$18.00", sale: true, originalPrice: "$40.00" },
    { name: "Sale Item", price: "$25.00", sale: true, originalPrice: "$50.00" },
    { name: "Popular Item", price: "$40.00", sale: false },
    { name: "Sale Item", price: "$50.00", sale: true, originalPrice: "$25.00" },
    { name: "Fancy Product", price: "$120.00 - $280.00", sale: false },
    { name: "Special Item", price: "$20.00", sale: true, originalPrice: "$18.00" },
    { name: "Popular Item", price: "$40.00", sale: false }
  ];

  const [addedItems, setAddedItems] = useState(Array(items.length).fill(false));
  const [count, setCount] = useState(0);

  const handleCart = (index) => {
    const updatedItems = [...addedItems];
    if (updatedItems[index]) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    updatedItems[index] = !updatedItems[index];
    setAddedItems(updatedItems);
  };

  return (
    <div>
      <Navigation count={count} />
      <Header />
      <Cart 
        items={items}
        addedItems={addedItems} 
        handleCart={handleCart} 
      />
      <Footer />
    </div>
  );
}

export default App;
