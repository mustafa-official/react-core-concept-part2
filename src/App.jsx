import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";

function App() {
  const handleClick = () => {
    alert("Clicked");
  };
  //using parameter
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2>React Core Concepts-2</h2>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert("Yes clicked")}>Click it!</button>
      {/* using parameter */}
      <button onClick={() => addToFive(20)}>Add Five</button>
    </>
  );
}

export default App;
