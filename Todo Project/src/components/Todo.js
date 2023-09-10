import React, { useState } from 'react';
import "./Todo.css";

function Child() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditSave = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editedTodo : todo
    );
    setTodos(updatedTodos);
    setEditIndex(-1);
    setEditedTodo('');
  };

  const editItem = (index) => {
    setEditIndex(index);
    setEditedTodo(todos[index]);
  };

  return (
    <div className='container'>
      <div>
      <h2>Todo-Project</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo} className='addbtn'>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={() => handleEditSave(index)} className='editbtn'>Save</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleDelete(index)} className='editbtn'>Delete</button>
                <button onClick={() => editItem(index)} className='editbtn'>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Child;