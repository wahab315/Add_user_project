import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Card className={classes.input}>
        <form action="" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <label htmlFor="age">Age (Year)</label>
          <input type="number" id="age" />
          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
