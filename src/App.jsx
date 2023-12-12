import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
function App() {
  return (
    <div className="bg-blue-100 h-screen w-full">
      <div className="container mx-auto px-3 py-12">
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
