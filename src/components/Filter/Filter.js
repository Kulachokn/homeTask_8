import React from "react";
import styles from "../Filter/Filter.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
