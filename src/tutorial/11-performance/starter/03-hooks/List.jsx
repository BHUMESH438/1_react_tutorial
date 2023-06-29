import Item from './Person';
import { memo } from 'react';
const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map(person => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};
export default memo(List);
//the props list do not change and we make changes in the parent component  the child component didnot change
//even though the child is present
export const slowFunction = () => {
  let value = 0;
  for (let i = 0; i <= 1000000000; i++) {
    value += i;
  }
  return value;
};
