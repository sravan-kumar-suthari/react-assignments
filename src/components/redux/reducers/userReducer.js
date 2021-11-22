import {
  ADD_USER_SUCCESS,
  LOAD_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
} from "../actions/actionsTypes";
import { initialState } from "./initialState";

const userReducer = (prevState = initialState.users, action) => {
  console.log(action, initialState.users);
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return [...action.users];

    case ADD_USER_SUCCESS:
      return [...prevState, action.user];

    case UPDATE_USER_SUCCESS:
      return prevState.map((item) => {
        if (item.id !== action.userdetails.id) {
          return item;
        }
        return {
          ...action.userdetails,
        };
      });

    case DELETE_USER_SUCCESS:
      let newState = prevState.filter((item) => item.id !== action.id);
      return newState;

    default:
      return prevState;
  }
};

export default userReducer;
