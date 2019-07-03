//Provider / Store for state
import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Chuck Belcher",
        email: "cfbelcher@pateogroup.com",
        phone: "410-709-8292"
      },
      {
        id: 2,
        name: "Christina Belcher",
        email: "christinabelcher@sudzypets.com",
        phone: "443-721-9156"
      },
      {
        id: 3,
        name: "John Francis",
        email: "johnfrancis@sudzypets.com",
        phone: "410-709-5592"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
