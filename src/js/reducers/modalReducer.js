import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
  display: "none",
  purpose: null,
  category: null,
  index: null
};

let modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        display: "none",
        purpose: null,
        category: null,
        index: null
      };
    case OPEN_MODAL:
      return {
        ...state,
        display: "block",
        ...action.payload
      };
    default:
      return state;
  }
};

export default modalReducer;