import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            { id: 1, name: 'Chuck Belcher', email: 'cfbelcher@pateogroup.com', phone: '410-709-8292' },
            { id: 2, name: 'Christina Belcher', email: 'christinabelcher@sudzypets.com', phone: '443-721-9156' },
            { id: 3, name: 'John Francis', email: 'johnfrancis@sudzypets.com', phone: '410-709-5592' },
        ]
    }


    render() {
        const { contacts } = this.state
        return (
            <div>
                {contacts.map(contact => (
                    <Contact key={contact.id}
                        contact={contact}
                    />
                ))}
            </div>
        )
    }
}

export default Contacts;