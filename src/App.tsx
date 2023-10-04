import React, { useState } from "react";
import Input from "./components/Input";
import { Todos } from "./types/Type";
import Message from "./components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  // const [todo2, setTodo2] = useState<number>(2);
  // const [todo3, setTodo3] = useState<number[]>([]);

  const addMessage = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo("");
  };

  const deleteMessage = (id:number) => {
     setTodos(todos.filter(todo => todo.id !== id)); 
  };

  console.log(todos, "todos");

  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} addMessage={addMessage} />
      <Message todos={todos} deleteMessage={deleteMessage} />
    </div>
  );
};

export default App;
