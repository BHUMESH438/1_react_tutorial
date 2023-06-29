import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Counter from './counter';
const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Counter />
      {/**this is called hook 1in the profiler and while rendering the child component only will change */}
      <List people={people} />
    </section>
  );
};
export default LowerState;
