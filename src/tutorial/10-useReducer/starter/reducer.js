import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from './actions';
import { data } from '../../../data';
export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_LIST) {
    console.log('>>>>>action', action.payload.id);
    let newPeople = state.people.filter(person => person.id !== action.payload.id);
    console.log('>>>>>>>>>>>', newPeople);
    return { ...state, people: newPeople };
  }
};
