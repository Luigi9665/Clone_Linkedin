import { ADD_ALL_PROFILE, ADD_PROFILE, ADD_PROFILE_VISUAL, DELETE_ESPERIENZE, DELETE_PROFILE, GET_ESPERIENZE } from "../action";

const initialState = {
  content: null,
  esperienze: [],
  profileToVisualize: null,
  allProfile: [],
};

const profileFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    case ADD_PROFILE_VISUAL:
      return {
        ...state,
        profileToVisualize: action.payload,
      };
    case ADD_ALL_PROFILE:
      return {
        ...state,
        allProfile: action.payload,
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
