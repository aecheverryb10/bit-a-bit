import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
  fontSize: 16,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MODIFY_STATE':
      return {
        ...state,
        [action.property]: action.value,
      };
    default:
      return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

export const { Provider, useTrackedState, useUpdate: useDispatch } = createContainer(useValue);
