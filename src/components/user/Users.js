import React from "react";

const Users = (props) => {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.gender}</td>
      <td>{props.dob}</td>
      <td>{props.mobile}</td>
      <td>
        <button type="button" onClick={(e) => props.editHandler(props.id)}>
          Edit
        </button>
        <button type="button" onClick={(e) => props.deleteHandler(props.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Users;
