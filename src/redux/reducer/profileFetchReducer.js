import { ADD_PROFILE, GET_ESPERIENZE } from "../action";
import { ADD_ESPERIENZE } from "../action";
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
    case ADD_ESPERIENZE:
      return {
        ...state,
        esperienze: [...state.esperienze, action.payload],
      };

    default:
      return state;
  }
};

export default profileFetchReducer;
