import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact}></ContactCard>
        )
    })
    return (
        <div>
        <h2 className="ui dividing header">Contact List</h2>
        <div className="ui celled list">
        {renderContactList}
        </div>
        </div>
    )
}

export default ContactList;