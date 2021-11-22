import * as types from "./actionsTypes";
import axios from "axios";

export const loadUserSuccess = (users) => {
  return {
    type: types.LOAD_USERS_SUCCESS,
    users,
  };
};

export const addUserSuccess = (user) => {
  return {
    type: types.ADD_USER_SUCCESS,
    user,
  };
};

export function updateUserSuccess(userdetails) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    userdetails,
  };
}

export function deleteUserSuccess(id) {
  return {
    type: types.DELETE_USER_SUCCESS,
    id,
  };
}

export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        //     console.log(response.data);
        dispatch(loadUserSuccess(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:4000/users", user)
      .then((response) => {
        //console.log(response.data);
        dispatch(addUserSuccess(user));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (userDetails) => {
  // console.log(productDetails);
  return (dispatch) => {
    axios
      .put(`http://localhost:4000/users/${userDetails.id}`, userDetails)
      .then((response) => {
        dispatch(updateUserSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:4000/users/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(deleteUserSuccess(id));
      })
      .catch((error) => console.log(error));
  };
};
