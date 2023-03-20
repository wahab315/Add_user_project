import { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import List from "./components/Users/List/List";
function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prev) => {
      return [...prev, { name: uName, age: uAge }];
    });
  };
  console.log(userList);
  const ListView = () => {
    if (userList.length > 0) {
      return (
        <>
          <List users={userList} />
        </>
      );
    } else {
      return (
        <center>
          <h3 style={{ color: "white" }}>No Added Yet</h3>
        </center>
      );
    }
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <ListView />
    </>
  );
}

export default App;
