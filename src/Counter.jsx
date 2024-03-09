import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleAdd() {
    const newCount = count + 1;
    setCount(newCount);
  }
  function handleDec() {
    const reduce = count - 1;
    setCount(reduce);
  }
  return (
    <div
      style={{
        border: "2px solid purple",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    >
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}
