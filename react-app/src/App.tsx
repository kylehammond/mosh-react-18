import { useState } from "react";
import "./App.css";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Fran",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    // spread is shallow, if you created two customers they'd both get the same address referenced, so we have to respecify
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
