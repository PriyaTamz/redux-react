import React, { useState } from 'react';
import Header from './Component/Header';
import Body from './Component/Body';
import Cart from './Component/Cart';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all'); 

  const addOrEditTodo = () => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, name, description } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null); 
    } else {
      setTodos([...todos, { name, description, status: 'not_completed' }]);
    }
    setName('');
    setDescription('');
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setName(todos[index].name);
    setDescription(todos[index].description);
  };

  const updateStatus = (index, status) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = status;
    setTodos(updatedTodos);
  };
  

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.status === 'completed';
    } else if (filter === 'not_completed') {
      return todo.status === 'not_completed';
    }
    return true; 
  });

  return (
    <div>
      <Header 
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        addOrEditTodo={addOrEditTodo}
        isEditing={editIndex !== null}
      />
      <Body setFilter={setFilter} />
      <Cart 
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        updateStatus={updateStatus}
      />
    </div>
  );
}

export default App;
