import React, { Component } from 'react';
import classNames from 'classnames';
import { addUser } from './store/user';
import { connect } from 'react-redux';

class AddUser extends Component {
  state = {
    fullname: '',
    email: '',
    errors: {}
  };
  onSubmit = e => {
    e.preventDefault();
    const { fullname, email, errors } = this.state;

    fullname.length === 0
      ? (errors['fullname'] = 'Please Enter your full name')
      : delete errors['fullname'];

    email.length === 0
      ? (errors['email'] = 'Please Enter your valid email address')
      : delete errors['email'];

    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      let user = { fullname, email };
      this.props.addUser(user);
      this.setState({ fullname: '', email: '', errors: {} });
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let { fullname, errors, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='fullname'
            placeholder='User Full Name'
            value={fullname}
            className={classNames('', { 'is-invalid': errors.fullname })}
            onChange={this.onChange}
          />
          {errors && <div className='invalid-feedback'>{errors.fullname}</div>}
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            placeholder='User email'
            value={email}
            className={classNames('', {
              'is-invalid': errors.email
            })}
            onChange={this.onChange}
          />
          {errors && <div className=' invalid-feedback'>{errors.email}</div>}
        </div>
        <button type='submit'> Add User </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addUser }
)(AddUser);
