import React, { Component } from "react";
import styles from "../ContactForm/ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            className={styles.input}
            type="tel"
            value={number}
            name="number"
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
