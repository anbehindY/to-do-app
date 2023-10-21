import { AddTodo } from "./components/AddTodo";

function App() {
  return (
    <div className="flex flex-col min-h-screen p-4 items-center">
      <div className="text-blue-600 text-3xl font-bold">
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
