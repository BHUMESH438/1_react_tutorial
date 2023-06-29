import { useReducer, useState } from 'react';
import { data } from '../../../data';
import { reducer } from './reducer';
import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from './actions';
//1.set default state
const defaultState = {
  people: data,
  isLoading: false
};
//in the reducer function we should pass the defaultstate as if wont it will rewrite the  state so spread the state,after update the state
const ReducerBasics = () => {
  //2.invoke use reducer function
  //state-is like initial state in usestate
  //dispatch is like setstate  in usestate
  //we can send the arg in dispatch through payload
  //in the reducer function action if the action.type === action.type we send from dispatch then the function of task takes place and after that the reducer will update the state
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state);
  const removeItem = id => {
    dispatch({ type: REMOVE_LIST, payload: { id } });
    // let newPeople = people.filter(person => person.id !== id);
    // setPeople(newPeople);
  };
  //reset
  const resetList = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(data);
  };
  //clear
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  return (
    <div>
      {state.people.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button className='btn' style={{ marginTop: '2rem' }} onClick={resetList}>
          reset
        </button>
      ) : (
        <button className='btn' style={{ marginTop: '2rem' }} onClick={clearList}>
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
