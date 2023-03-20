import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrroModal from "../../UI/ErrroModal/ErrroModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (not-empty values)",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid Age ( > 0)",
      });
    }

    props.onAddUser(userName, enterAge);
    console.log(userName, enterAge);

    setUserName("");
    setEnterAge("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangehandler = (event) => {
    setEnterAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrroModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input} onSubmit={addUserHandler}>
        <form action="" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            type="number"
            id="age"
            value={enterAge}
            onChange={ageChangehandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
