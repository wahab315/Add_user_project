import AddUser from "./components/Users/AddUser/AddUser";
import List from "./components/Users/List/List";
function App() {
  return (
    <>
      <AddUser />
      <List users={[]} />
    </>
  );
}

export default App;
