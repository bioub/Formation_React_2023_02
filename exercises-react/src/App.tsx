import TodoItem from "./TodoItem";

function App() {
  return (
    <div className="App">
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        <TodoItem todo={{ id: Math.random(), title: 'ABC', completed: false }} />
        <TodoItem todo={{ id: Math.random(), title: 'DEF', completed: true }} />
        <TodoItem todo={{ id: Math.random(), title: 'XYZ', completed: false }} />
      </div>
    </div>
  );
}

export default App;
