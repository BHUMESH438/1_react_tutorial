import { people } from '../../../data';
import Person from './Person';
const List = () => {
  return (
    <div>
      {people.map(person => {
        return <Person key={people.id} {...person} />;
      })}
    </div>
  );
};
export default List;
