import { useEffect, useState } from "react";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import "./index.css";
const userDb = [
  {
    name: "John",
    age: 30,
    id: Math.random(),
  },
];

function App() {

  const [data, setData] = useState(userDb);

  const updateData = (data) => {
    setData((prevData)=>{
      return [...prevData, data];
    });
    userDb.push(data);
  };

  return (
    <div className="App">
      <UserInput sendDataUpwards={updateData} />
      <UserList data={userDb} />
    </div>
  );
}

export default App;
