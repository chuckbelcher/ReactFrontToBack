import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submitting form ...");
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header"> Add Contact</div>
        <div className="card-body" />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              placeholder="Enter Name ..."
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter E-Mail ..."
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control form-control-lg"
              placeholder="Enter Telephone Number ..."
              value={phone}
              onChange={this.onChange}
            />
          </div>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-block btn-dark"
          />
        </form>
      </div>
    );
  }
}

export default AddContact;
