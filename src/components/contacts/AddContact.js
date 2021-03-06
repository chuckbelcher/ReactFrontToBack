import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
//import uuid from 'uuid';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    website: '',
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, website } = this.state;

    //Check fields to ensure that they are populated
    if (name === '') {
      this.setState({ errors: { name: 'Name is a required field' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is a required field' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      website
    };
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    //Clear state to clear form elements after submission
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: '',
      website: ''
    });

    this.props.history.push('/');
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, website, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header bg-dark text-white"> Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter E-Mail"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone Number"
                    name="phone"
                    placeholder="Enter Telephone Number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Website"
                    name="website"
                    placeholder="Enter Website"
                    value={website}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
