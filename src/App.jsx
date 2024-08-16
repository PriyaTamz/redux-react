import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [localUsers, setLocalUsers] = useState([]); 
  const [newUser, setNewUser] = useState({ 
    name: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    phone: '',
    company: {
      name: '',
    },
  });

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(apiURL);
    setUsers(response.data);
  };

  const addUser = async () => {
    if (newUser.name && newUser.email) {
      const response = await axios.post(apiURL, newUser);
      const createdUser = { ...response.data, id: users.length + localUsers.length + 1 };
      setLocalUsers([...localUsers, createdUser]); 
      setNewUser({ 
        name: '', 
        email: '', 
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
        }, 
        phone: '',
        company: {
          name: '',
        }
      });
    }
  };

  const deleteUser = async (id) => {
    if (id <= users.length) {
      await axios.delete(`${apiURL}/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } else {
      setLocalUsers(localUsers.filter(user => user.id !== id));
    }
  };

  const startEditingUser = (user) => {
    setEditingUser(user);
  };

  const cancelEditing = () => {
    setEditingUser(null);
  };

  const editUser = async () => {
    if (editingUser.name && editingUser.email) {
      if (editingUser.id <= users.length) {
        const response = await axios.put(`${apiURL}/${editingUser.id}`, editingUser);
        setUsers(users.map(user => (user.id === editingUser.id ? response.data : user)));
      } else {
        setLocalUsers(localUsers.map(user => (user.id === editingUser.id ? editingUser : user)));
      }
      setEditingUser(null);
    }
  };

  return (
    <div className="app">
      <h1>User Management</h1>

      <div className="form">
        <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={editingUser ? editingUser.name : newUser.name}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, name: e.target.value }) : setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={editingUser ? editingUser.email : newUser.email}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, email: e.target.value }) : setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Street"
          value={editingUser ? editingUser.address.street : newUser.address.street}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, address: { ...editingUser.address, street: e.target.value } }) : setNewUser({ ...newUser, address: { ...newUser.address, street: e.target.value } })}
        />
        <input
          type="text"
          placeholder="Suite"
          value={editingUser ? editingUser.address.suite : newUser.address.suite}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, address: { ...editingUser.address, suite: e.target.value } }) : setNewUser({ ...newUser, address: { ...newUser.address, suite: e.target.value } })}
        />
        <input
          type="text"
          placeholder="City"
          value={editingUser ? editingUser.address.city : newUser.address.city}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, address: { ...editingUser.address, city: e.target.value } }) : setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
        />
        <input
          type="text"
          placeholder="Zipcode"
          value={editingUser ? editingUser.address.zipcode : newUser.address.zipcode}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, address: { ...editingUser.address, zipcode: e.target.value } }) : setNewUser({ ...newUser, address: { ...newUser.address, zipcode: e.target.value } })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={editingUser ? editingUser.phone : newUser.phone}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, phone: e.target.value }) : setNewUser({ ...newUser, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={editingUser ? editingUser.company.name : newUser.company.name}
          onChange={(e) => editingUser ? setEditingUser({ ...editingUser, company: { ...editingUser.company, name: e.target.value } }) : setNewUser({ ...newUser, company: { ...newUser.company, name: e.target.value } })}
        />
        {editingUser ? (
          <>
            <button onClick={editUser}>Update</button>
            <button onClick={cancelEditing}>Cancel</button>
          </>
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>

      <div className="user-list">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...users, ...localUsers].map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
                <td>
                  <button onClick={() => startEditingUser(user)}>Edit</button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
