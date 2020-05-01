import React from "react";
import {CSSTransition} from "react-transition-group";
import slideAlertTransition from "../../transitions/slide.module.css";

const Alert = ({message, appearAlert}) => {
    return (
    <CSSTransition
    in={appearAlert}
    timeout={250}
    unmountOnExit
    classNames={slideAlertTransition}
    >
        <p>{message}</p>
    </CSSTransition>
    )
};

export default Alert;