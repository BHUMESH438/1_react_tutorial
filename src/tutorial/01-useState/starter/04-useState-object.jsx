import { useState } from 'react';

const UseStateObject = () => {
  const [person, setperson] = useState({
    name: 'bhu',
    age: 24,
    hobby: 'sleep'
  });

  const update = () => {
    setperson({ ...person, name: 'kavia' });
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      {/* update is defined already no need of callback */}
      <button onClick={update}>update</button>
    </>
  );
};

export default UseStateObject;
