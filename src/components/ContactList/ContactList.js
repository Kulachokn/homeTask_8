import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "../ContactList/ContactList.module.css"
import transformTransition from "../../transitions/transform.module.css";

const ContactList = ({contacts, onRemoveContact}) => (
    <>
        <h2>Contacts</h2>
        <TransitionGroup component="ul" className={styles.container}>
            {contacts.map(({id, name, number}) => (
                <CSSTransition
                    key={id}
                    timeout={500}
                    unmountOnExit
                    classNames={transformTransition}
                >
                    <ContactListItem
                        id={id}
                        name={name}
                        number={number}
                        onRemove={() => onRemoveContact(id)}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    </>
);

export default ContactList;
