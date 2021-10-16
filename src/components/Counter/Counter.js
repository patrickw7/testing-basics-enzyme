import React, { useState } from 'react';

import './counter.scss';

const Counter = ({ start = 0 }) => {
  const [counter, setCounter] = useState(start);

  const increaseCounter = () => {
    let increasedValue = counter;
    setCounter((increasedValue += 1));
  };

  const decreaseCounter = () => {
    let decreasedValue = counter;
    setCounter((decreasedValue -= 1));
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const newCounterNumber = (e) => {
    const valueInNumber = parseInt(e.target.value, 10);
    setCounter(valueInNumber);
  };

  return (
    <div className='wrapper'>
      <span>{counter}</span>
      <div className='column'>
      <button className="increaseBtn" onClick={increaseCounter}>
        Increase
      </button>
      <button className="decreaseBtn" onClick={decreaseCounter}>
        Decrease
      </button>
      </div>
      <div className='column'>
      <input
        onChange={newCounterNumber}
        placeholder="change counter"
        type="number"
      />
      <button className="resetBtn" onClick={resetCounter}>
        Reset
      </button>
      </div>
    </div>
  );
};

export default Counter;