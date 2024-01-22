import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./Context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((p) => [{ id: Date.now(), ...todo }, ...p]);
  };

  const updateToto = (id, todo) => {
    setTodos((prev) =>
      prev.map((indTodo) => (indTodo.id === id ? todo : indTodo))
    );
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((indTodo) => indTodo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((indTodo) =>
        indTodo.id === id
          ? { ...indTodo, completed: !indTodo.completed }
          : indTodo
      )
    );
  };
  // ----------------------------------
  // -------local storage------------
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  //-----
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateToto, removeTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((t) => (
              <div key={t.id} className="w-full">
                <TodoItem todo={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
