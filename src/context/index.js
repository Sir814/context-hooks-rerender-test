
import React from 'react';

export const GlobalContext = React.createContext(null);

export const initState = { count: 0, step: 0, number: 0 };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'stepInc': return Object.assign({}, state, { step: state.step + 1 });
    case 'numberInc': return Object.assign({}, state, { number: state.number + 1 });
    case 'count': return Object.assign({}, state, { count: state.step + state.number });
    default: return state;
  }
}