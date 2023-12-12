import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const addToDoHandler = (e) => {
        e.preventDefault();  
        if (input) {
            dispatch(addTodo(input))
            setError(false);
            setInput('');
        }
        else{     
            setError(true);
        }
        
     
    }
    return (
        <div>
            <h3 className="text-center font-semibold text-lg">Todos Using Reactjs, Redux-Tolkit</h3>
            <form className="w-full flex flex-col md:flex-row mt-5" onSubmit={addToDoHandler}>
                <input
                    type="text"
                    className="border rounded border-slate-300 outline-blue-600 px-4 py-2 flex-grow"
                    placeholder="Enter a todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />          
                <button
                    type="submit"
                    className="border rounded border-slate-300 outline-blue-600 ms-0 mt-5 md:ms-5 md:mt-0  bg-blue-600 text-white px-4 py-2"
                >Add Todo</button>
            </form>
            {error ?( <small className="text-red-600"> Enter a Todo</small>):null}
        </div>
    )
}

export default AddTodo