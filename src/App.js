import React, { useState } from "react";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "work on React",
    "finish cs50",
    "order snacks",
  ]);
  const [input, setInput] = useState([""]);
  console.log(input);

  const addTodo = (event) => {
    //adding todos to the list after clicking the button
    event.preventDefault();
    console.log("its working");

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>wish list!</h1>
      <form>
        <FormControl>
          <InputLabel>Make A Wish!</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          add todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
