import Users from './Users';
import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AddUser from './AddUser';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1> Users List</h1>
        <div className='content'>
          <AddUser />
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
