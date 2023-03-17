import React from "react";
import classes from "./List.module.css";
import Card from "../../UI/Card/Card";

const List = (props) => {
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => {
            <li>
              {user.name} ({user.age} years old)
            </li>;
          })}
        </ul>
      </Card>
    </>
  );
};

export default List;
