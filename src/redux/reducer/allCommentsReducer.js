import { ADD_COMMENT } from "../action";

const initialState = {
  content: [],
};

const allCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default allCommentsReducer;
