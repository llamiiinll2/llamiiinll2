import React, { useState } from "react";

interface ICounter{
  startCount : number;
}
const Counter = (props:ICounter) => {
  const {startCount}=props
  console.log("start count",startCount)
  const [counter, setCounter] = useState(startCount);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <button onClick={decreaseCounter}>-</button>
      <span>{counter}</span>
      <button onClick={increaseCounter}>+</button>
      
    </div>
  );
};
export default Counter;
