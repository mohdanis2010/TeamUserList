import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import UserCardList from "./components/UserCardList";

function App() {
  const loadUserData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((employee) => employee.json())
      .then((dt) => {
        setUsers(dt);
      });
  };
  useEffect(() => {
    loadUserData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState();

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  if (!users) {
    return <h1>Loading...</h1>;
  }
  const updatedUsers = (users || []).filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  });
  return (
    <div className="App">
      <Layout>
        <Header />
        <Navigation onSearch={handleSearchTerm} searchTerm={searchTerm} />
        <UserCardList data={updatedUsers} />
      </Layout>
    </div>
  );
}

export default App;
