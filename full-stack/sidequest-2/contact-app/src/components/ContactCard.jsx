import React from 'react';
import user from '../images/user.svg';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;

    return (
        <div className="item">
            <img className='ui avatar image' src={user} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
        <i className="trash alternate outline icon"
        style={{color:"red", marginTop:"7px"}} >
        </i>
        </div>
    </div>
    )
}

export default ContactCard;