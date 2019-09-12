import React, { useState } from 'react';
import { UserForm } from './components/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users)
  const updateUsers = (newUser) => {
    const userlist = [...users, newUser]
    setUsers(userlist)
  }

  return (
    <div className="App">
      
      <UserForm updateUsers={updateUsers} />
 
    </div>
  );
}

export default App;
