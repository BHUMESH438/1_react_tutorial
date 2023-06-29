import { useEffect, useRef, useState } from 'react';
//we can use userf for uncontrolled inputs
const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  //if we use use
  const refContainer = useRef(null);
  const isMounted = useRef(false);
  console.log('>>>>>>>>>>>isMounted', isMounted);
  //null is intentionally making it 0
  console.log('>>>>>>>>>useref', refContainer);
  //after initial render the useref is false i.e first time loaded and after that if the current value of the use ref is continued to false then set it to true by useeffect and passig the specific state value and setting that state value to the arrayx`
  //and also we wont trigger the rerender even if we didnt give the dependency array in the useefect and so infineite loop wont exist
  useEffect(() => {
    refContainer.current.focus();
  });
  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      return;
    }
  }, [value]);
  const handleSubmit = e => {
    e.preventDefault();
    const name1 = refContainer.current.value;
    console.log('>>>>>>>>>>', name1);
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>

          <input type='text' id='name' className='form-input' ref={refContainer} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
