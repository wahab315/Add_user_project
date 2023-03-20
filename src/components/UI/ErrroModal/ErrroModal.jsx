import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrroModal.module.css";

const ErrroModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrroModal;
