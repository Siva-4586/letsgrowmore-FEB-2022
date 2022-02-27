import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [userData, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className="App">
      <div id="navbar">
        <h3> Task -2 </h3>
        <button onClick={loadUsers}> Get Users </button>
      </div>
      <div id="container">
        {userData.map((data) => (
          <div id="mainContainer">
            <img src={data.avatar} alt="Avatar" />
            <h3>
              {" "}
              {data.first_name} {data.last_name}{" "}
            </h3>
            <p> {data.email} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
