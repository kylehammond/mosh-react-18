import { useState } from "react";
import "./App.css";
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  // const [] = setState();

  // const handleClick = () => {};

  return (
    <div>
      <ExpandableText maxChars={5}>1234567890</ExpandableText>
    </div>
  );
}

export default App;
