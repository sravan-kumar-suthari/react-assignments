import React from "react";
import { connect } from "react-redux";
import UsersList from "./UsersList";
import { loadUsers } from "../redux/actions/userActions";

class AllUsersPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div style={{ marginLeft: 10 }}>
        <h1>Users List</h1>
        <UsersList usersList={this.props.usersList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(loadUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPage);
