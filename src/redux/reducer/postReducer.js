import { ADD_POST } from "../action";

const initialState = {
  content: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
