import { useState } from "react";
import Taskitem from "./components/Taskitem";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    // Spread operator to add new task
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    // Splice to remove task
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

          <div className="flex gap-2 mb-4">
            <input
              className="flex-1 border p-2 rounded"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a task..."
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {/* map to render tasks */}
            {tasks.map((task, index) => (
              <Taskitem task={task} index={index} deleteTask={deleteTask} />
            ))}
          </ul>
        </div>
      </div>
      );

    </>
  )
}


