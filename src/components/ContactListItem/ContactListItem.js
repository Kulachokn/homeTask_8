import React from "react";
import styles from "../ContactListItem/ContactListItem.module.css";
import T from "prop-types";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={styles.item}>
    {name} : {number}
    <button className={styles.button} type="button" onClick={onRemove}>
      Delete
    </button>
  </li>
);

ContactListItem.protoType = {
  name: T.string.isRequired,
  number: T.number.isRequired,
  onRemove: T.func.isRequired
};

export default ContactListItem;
