import React from 'react';
import Contact from './Contact';

const Contacts = (props) => {
    const {contacts} = props;
        return (
            <div>
                {contacts.map((contact, index) => (<Contact contact={contact} key={index} />))}
            </div>
    )

}

export default Contacts;