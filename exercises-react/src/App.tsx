import { useState, FormEvent } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 987, title: 'XYZ', completed: false },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('GHI');
  const [editingId, setEditingId] = useState(987);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random(), title: newTodoTitle, completed: false }
    ])
  }

  return (
    <div className="App">
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" value={newTodoTitle} onChange={(event) => setNewTodoTitle(event.target.value)} />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} isEditing={todo.id === editingId}  />)}
      </div>
    </div>
  );
}

export default App;
