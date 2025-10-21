import { ADD_PROFILE } from "../action";

const initialState = {
  content: null,
};

const profileFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default profileFetchReducer;
