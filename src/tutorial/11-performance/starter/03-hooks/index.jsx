import { useCallback, useMemo, useState } from 'react';
import { data } from '../../../../data';
import List, { slowFunction } from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(slowFunction(), []);
  //memo catches the data of the sepecific componenet and if that component has no change then it will keep the catched data and next time rendering the rendering will be fast
  const removePerson = useCallback(
    id => {
      const newPeople = people.filter(person => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );
  return (
    <section>
      <button className='btn' onClick={() => setCount(count + 1)} style={{ marginBottom: '1rem' }}>
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
