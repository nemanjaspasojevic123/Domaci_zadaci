import React from 'react';

const Contact = (props) =>{
    let {contact} = props;
    return(
    <div>
        <div>
            <label>{`${contact.name}`}{' '}</label>
            <label>{`${contact.number}`}</label>
        </div>
    </div>
    )
}
export default Contact