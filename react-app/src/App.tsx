import { useState } from "react";
import "./App.css";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy pepperoni",
    toppings: ["mushroom"],
  });

  const handleClick = () => {
    let newPizza = { ...pizza, toppings: [...pizza.toppings, "spicy peppies"] };
    setPizza(newPizza);
  };

  return (
    <div>
      <button onClick={handleClick}>{pizza.toppings.length}</button>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
