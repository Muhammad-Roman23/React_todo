import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [data, setdata] = useState([]);
  function changehandler(value) {
    setinputvalue(value);
    console.log(value);
  }

  function stopsubmit(event) {
    event.preventDefault();

    if (!inputvalue) {
      console.log("empty data");
      alert("Can't Add empty data");
      return;
    }
    if (data.includes(inputvalue)) {
      alert("Data already exists");
      setinputvalue("");
      return;
    }

    setinputvalue("");
    setdata((prev) => [...prev, inputvalue]);
  }
  const clearall = () => {
    setdata([]);
  };
  const DelecteCurrentElement = (value) => {
    console.log(data);
    console.log(value);
    const flterdata = data.filter((curr) => curr !== value);
    setdata(flterdata);
  };
  return (
    <div className="parent">
      <form action="" onSubmit={stopsubmit}>
        <h1>Todo App</h1>
        <div className="inputs">
          <input
            type="text"
            name="todo"
            placeholder="Enter your todo"
            value={inputvalue}
            onChange={(e) => changehandler(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </div>
      </form>
      <div className="ul">
        <ul>
          {data.map((currtas, index) => {
            return (
              <>
                <div className="listparent">
                  <li key={index}>{currtas}</li>
                  <div className="btns">
                    <button className="add">Add</button>
                    <button
                      className="delete"
                      onClick={() => DelecteCurrentElement(currtas)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <button className="clear-btn" onClick={clearall}>
        Clear All
      </button>
    </div>
  );
};
