import { useState } from 'react';

const ErrorExample = () => {
  let [count, setcount] = useState(0);
  let handleClick = () => {
    setcount(count + 1);
  };
  let handleClick1 = () => {
    setcount(count - 1);
  };
  return (
    <>
      <h2>count:{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        +
      </button>
      <button type='button' className='btn' onClick={handleClick1}>
        -
      </button>
    </>
  );
};

export default ErrorExample;
