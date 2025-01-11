import React from 'react'
import { useState } from 'react';
import './App.css';
 
function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <h1>Item List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
          className="input-field"
        />
        <button onClick={addItem} className="add-item-btn">
          Add Item
        </button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

