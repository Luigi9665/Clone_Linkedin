import { ADD_PROFILE, DELETE_ESPERIENZE, DELETE_PROFILE, GET_ESPERIENZE } from "../action";

const initialState = {
  content: null,
  esperienze: [],
};

const profileFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    case GET_ESPERIENZE:
      return {
        ...state,
        esperienze: action.payload,
      };
    case DELETE_PROFILE:
      return {
        ...state,
        content: null,
      };
    case DELETE_ESPERIENZE:
      return {
        ...state,
        esperienze: [],
      };

    default:
      return state;
  }
};

export default profileFetchReducer;
