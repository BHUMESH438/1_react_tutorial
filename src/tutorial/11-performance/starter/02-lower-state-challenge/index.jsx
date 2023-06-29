import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Forms from './Forms';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = name => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <>
      {/* {'make seperate componenet for the forms so that each time render will be avoided when typing  '} */}
      <Forms addPerson={addPerson} />
      <List people={people} />
    </>
  );
};
export default LowerStateChallenge;
