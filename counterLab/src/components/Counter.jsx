import { useState } from "react";

const Counter = ({ name, theme, config }) => {
  let [num, setNum] = useState(0);
  function inc() {
    setNum(num + config);
  }
  function dec() {
    if (num > 0) {
      setNum(num - config);
    }
  }
  function reset() {
    setNum(0);
  }
  return (
    <div className={`counter ${theme}`}>
      <div className="counter-detail">
        <div className="count-name">{name}</div>
        <div className="count-config">{config}</div>
      </div>
      <span>{num}</span>
      <div className="operations">
        <button onClick={dec}>-</button>
        <button onClick={reset}>=</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
};

export default Counter;
