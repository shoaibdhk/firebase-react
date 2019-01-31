import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, removeUser } from './store/user';
import firestore from './firebase';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.lists);
  }
  render() {
    const { lists } = this.props;
    console.log(this.props.lists);
    return (
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            <span>{list.fullname}</span>
            <span>{list.email}</span>
            <div onClick={() => this.props.removeUser(list.id)}>&times;</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(
  ({ lists }) => ({ lists }),
  { getUsers, removeUser }
)(Users);
