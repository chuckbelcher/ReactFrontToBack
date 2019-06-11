import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = { showContactInfo: true }

    static propTypes = {
        contact: PropTypes.object.isRequired
    };

    onShowClick = (e) => {
        //showContactInfo = !showContactInfo;
        console.log(e, this.state);
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4>{name} <i onClick={this.onShowClick.bind(this, { id })} className="fas fa-sort-down"></i></h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone} </li>
                </ul>

            </div>
        )
    }
}



export default Contact;