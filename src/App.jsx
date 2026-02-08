import { useEffect, useRef, useState } from "react"
import moment from "moment"
import { useForm } from "react-hook-form"


const TodoItem = ({todos = null}) => {
    return (
        <ul>
            {
                todos != null ?
                    todos.map(
                        (todo, index) => {
                            const checkbox = useRef()
                            const todoName = useRef()
                            const todoCreated = useRef()
                            const todoDeadline = useRef()
                            const todoDone = useRef()
                            function toggleStatus() {
                                if (checkbox.current.checked) {
                                    todoName.current.classList.add('line-through')
                                    todoDone.current.textContent = moment().format('DD MMMM YYYY hh:mm:ss')
                                } else {
                                    todoName.current.classList.remove('line-through')
                                    todoDone.current.textContent = ''
                                }
                            }
                            return (
                                <label key={index}>
                                    <div className="flex gap-4 flex-1">
                                        <input ref={checkbox} type="checkbox" id="checkbox" name="todo" className="w-7 h-7" onChange={toggleStatus} />
                                        <span ref={todoName}>{todo.name}</span>
                                    </div>
                                    <div className="flex flex-col pl-16 flex-1">
                                        <div className="flex">
                                            <span className="font-bold w-50">Tanggal dibuat:</span>
                                            <span ref={todoCreated} className="flex">{todo.createdAt}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="font-bold w-50">Target selesai:</span>
                                            <span ref={todoDeadline} className="flex">{todo.target}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="font-bold w-50">Selesai pada:</span>
                                            <span ref={todoDone} className="flex">-</span>
                                        </div>
                                    </div>
                                </label>
                            )
                        }
                    )
                    :
                    "Loading... Atau Masih Kosong"
            }
        </ul>
    )
}

function App() {
    const { register, handleSubmit } = useForm()
    const [todos, setTodos] = useState(null)
    useEffect(
        () => {
            setTodos(JSON.parse(window.localStorage.getItem('todos')))
        }, []
    )
    function addToDo(data) {
        if(todos != null){
            const currentData = todos
            data.id = todos.length + 1
            data.createdAt = moment().format("DD MMMM YYYY")
            data.target = moment(data.target, "DD MMMM YYYY").format("DD MMMM YYYY")
            currentData.push(data)
            setTodos(currentData)
            window.localStorage.setItem('todos', JSON.stringify(currentData))
        }else{
            const todo = []
            todo.push(data)
            setTodos(todo)
            window.localStorage.setItem('todos', JSON.stringify(todo))
        }
    }
    return (
        <section>
            <div className="container w-3xl p-4 mx-auto my-4 flex flex-col gap-4">
                <div className="section-header rounded bg-white shadow p-4 flex flex-col items-center gap-4">
                    <h1 className="text-xl font-bold">ToDo List React App</h1>
                    <form className="flex justify-center items-center gap-4" onSubmit={handleSubmit(addToDo)}>
                        <label htmlFor="name" className="flex flex-col gap-4 border p-4 rounded">
                            Todo
                            <input type="text" {...register("name")} id="name" className="outline-0 border-b" placeholder="Add todo name" />
                        </label>
                        <label htmlFor="target" className="flex flex-col gap-4 border p-4 rounded">
                            When Todo Target Done
                            <input type="date" {...register("target")} id="target" className="outline-0 border-b" placeholder="08 february 2026" />
                        </label>
                        <button type="submit" className="bg-black h-10 flex flex-col justify-center items-center p-4 rounded text-white">Add todo</button>
                    </form>
                </div>
                <div className="section-body rounded bg-white shadow p-4 flex flex-col justify-center items-center gap-4">
                    <h1 className="w-full text-xl font-bold">To Do:</h1>
                    <ul className="w-full flex flex-col gap-4">
                        <li>
                            <TodoItem todos={todos}/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default App
