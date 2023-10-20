import { AppState, AppActionTypes, AppActionType } from "./AppType";

const appReducer = (state: AppState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case AppActionType.SET_FONTS:
      return {
        ...state,
        fonts: action.payload,
      };
    case AppActionType.SET_RESPONSE:
      return {
        ...state,
        response: action.payload,
      };
    case AppActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
