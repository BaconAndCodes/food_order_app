import React from 'react';
import ReactDom from 'react-dom';
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>{" "}
    </div>
  );
};
const portal = document.getElementById('overlays');
const Modal = (props) => {
    return <React.Fragment>
        {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart}/>,portal)}
        {ReactDom.createPortal(<ModalOverlay> {props.children}</ModalOverlay>,portal)}
    </React.Fragment>
};
export default Modal;
