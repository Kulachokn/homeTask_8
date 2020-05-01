import React, {Component} from "react";
import Layout from "./Layout/Layout";
import {uuid} from "uuidv4";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import {CSSTransition} from "react-transition-group";
import fadeTransition from "../transitions/scale.module.css";
import appear from "../transitions/appear.module.css"
import Alert from "./Alert/Alert";

export default class App extends Component {
    state = {
        contacts: [
            {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
            {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
            {id: "id-3", name: "Eden Clements", number: "645-17-79"},
            {id: "id-4", name: "Annie Copeland", number: "227-91-26"}
        ],
        filter: "",
        appearAlert: false,
        message: "",
    };

    addContact = (name, number) => {
        const contact = {
            id: uuid(),
            name: name,
            number: number
        };

        if (this.state.contacts.find(contact => contact.name === name)) {
            this.setState({
                appearAlert: true,
                message: `${name} is already in contacts`
            });

            return setTimeout(() => this.setState({appearAlert: false}), 2000)
        }

        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, contact]
            };
        });
    };

    removeContact = contactId => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(({id}) => id !== contactId)
            };
        });
    };

    changeFilter = filter => {
        this.setState({filter});
    };

    getVisibleContacts = () => {
        const {contacts, filter} = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    render() {
        const {filter, contacts, appearAlert, message} = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (
            <Layout>
                <CSSTransition in={true} appear timeout={500} classNames={appear}>
                    <h2>Phonebook</h2>
                </CSSTransition>
                <ContactForm onAddContact={this.addContact}/>
                <CSSTransition
                    in={contacts.length > 1}
                    timeout={250}
                    classNames={fadeTransition}
                    unmountOnExit
                >
                    <Filter value={filter} onChangeFilter={this.changeFilter}/>
                </CSSTransition>
                <Alert message={message} appearAlert={appearAlert}/>
                {visibleContacts.length > 0 && (
                    <ContactList
                        contacts={visibleContacts}
                        onRemoveContact={this.removeContact}
                    />
                )}
            </Layout>
        );
    }
}
