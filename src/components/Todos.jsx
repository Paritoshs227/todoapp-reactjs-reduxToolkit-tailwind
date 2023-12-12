import { removeTodo } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();  
    return (
        <div className='mt-5'>
            {todos.length > 0 && (
                <>
                    <h3 className="text-center font-semibold text-lg">Todos List</h3>
                    <ul className='border rounded border-slate-300 p-2'>
                        {todos.map((todo) => (
                            <li key={todo.id} className='bg-slate-100 p-1 flex justify-between items-center mt-2'>
                                <p>{todo.text}</p>
                                <button className='bg-red-700 text-black font-bold text-lg px-2 py-1 rounded' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default Todos