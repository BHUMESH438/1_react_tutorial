import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  console.log('>>>>people', people);

  console.log('filter>>>>');

  return (
    <>
      <ul>
        {people.map(person => {
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button
                onClick={() => {
                  console.log('>>>>idd>', id);
                  setPeople(people.filter(person => person.id !== id)); //will return the id which is not matched and will not return the matched id
                }}
              >
                remove one
              </button>
            </div>
          );
        })}
        <button
          onClick={() => {
            setPeople([]); //will return
          }}
        >
          remove all
        </button>
      </ul>
    </>
  );
};

export default UseStateArray;
