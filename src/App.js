import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState();
  const [items, setItems] = useState([]);

  const currentItem = (event) => {
    setItem(event.target.value);
  };

  const addItems = (event) => {
    event.preventDefault();
    setItems([...items, item]);
    setItem("");
  };

  const deleteItem = (id) => {
    setItems(
      items.filter((val, index) => {
        return index !== id;
      })
    );
    console.log(id);
  };

  return (
    <>
      <div className="to-do-list-container">
        <h1>To-Do List</h1>
        <form className="input-container">
          <input
            type="text"
            placeholder="Add Items"
            onChange={currentItem}
            value={item}
          />
          <button type="submit" className="btn" onClick={addItems}>
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </form>

        <ul className="items-container">
          {items.map((item, index) => {
            return (
              <ToDoItem
                key={index + 1}
                item={item}
                id={index}
                deleteFunc={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
