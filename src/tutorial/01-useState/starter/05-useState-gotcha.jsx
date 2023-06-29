import { useState } from 'react';

const UseStateGotcha = () => {
  let [a, setA] = useState(0);
  console.log('>>>>>>>>>>>a', a);
  let update = () => {
    setA(a => a + 1);
  };
  let updatetimer = () => {
    setTimeout(() => {
      setA(a => a + 1);
    }, 3000);
  };

  return (
    <>
      <h2>{a}</h2>
      <button className='btn' onClick={update}>
        add
      </button>
      <button className='btn' onClick={updatetimer}>
        upfate
      </button>
    </>
  );
};

export default UseStateGotcha;
