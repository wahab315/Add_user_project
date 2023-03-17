import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || enterAge.trim().length === 0) {
      return;
    }
    if (+enterAge < 1) {
      return;
    }

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

  return (
    <>
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
