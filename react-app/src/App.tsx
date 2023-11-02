import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Items: {cart.items.length}</button>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title}:{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
