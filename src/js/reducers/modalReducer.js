import { OPEN_MODAL, CLOSE_MODAL, CHANGE_INPUT } from '../actions/types';

const initialState = {
  display: "none",
  purpose: null,
  category: null,
  index: null,
  input: ""
};

let modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        display: "none",
        purpose: null,
        category: null,
        index: null,
        input: ""
      };
    case OPEN_MODAL:
      return {
        ...state,
        display: "block",
        ...action.payload
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }
    default:
      return state;
  }
};

export default modalReducer;