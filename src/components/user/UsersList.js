import React from "react";
import Users from "./Users";
import { deleteUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const UsersList = (props) => {
  const deleteHandler = (id) => {

    if (window.confirm("Do you really want to delete?")) {
      props.deleteUser(id);
    }
  
      // 
    // }
   
  };

  const editHandler = (id) => {
    // let params=useParams()
    // console.log(params);

    props.history.push(props.match.url + "edituser/" + id);
  };

  let Data =
    props.usersList &&
    props.usersList.map((ele, index) => {
      return (
        <Users
          firstName={ele.firstName}
          lastName={ele.lastName}
          email={ele.email}
          gender={ele.gender}
          dob={ele.dob}
          mobile={ele.Mobile}
          key={ele.id}
          id={ele.id}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      );
    });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>

            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Mobile Num</th>
          </tr>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(UsersList));
