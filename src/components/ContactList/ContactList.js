import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onRemoveContact }) => (
  <>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemoveContact(id)}
        />
      ))}
    </ul>
  </>
);

export default ContactList;
