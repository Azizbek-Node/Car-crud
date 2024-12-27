import React from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Food from "./components/food/Food";

function App() {
  const handleClick = (p) => {
    alert("function comp" + p);
  };
  return (
    <>
      {/* <Hero title={"class component"} />
      <h2>React</h2>
      <button onClick={() => handleClick(5)}>Click</button> */}
      <Food />
    </>
  );
}

export default App;
