import React from "react"
import moment from "moment"

const todo = [
    {
        id: 1,
        name: "cuci pakaian",
        createdAt: "22 januari 2025",
        doneAt: "24 januari 2025",
        target: "26 januari 2025",
    },
    {
        id: 2,
        name: "beli bahan makanan seminggu",
        createdAt: "22 januari 2025",
        doneAt: "24 januari 2025",
        target: "26 januari 2025",
    },
    {
        id: 3,
        name: "cuci motor",
        createdAt: "22 januari 2025",
        doneAt: "24 januari 2025",
        target: "26 januari 2025",
    },
    {
        id: 4,
        name: "weekly",
        createdAt: "22 januari 2025",
        doneAt: "24 januari 2025",
        target: "26 januari 2025",
    }
]

const TodoItem = () => {
    const checkbox = React.useRef()
    const todoName = React.useRef()
    const todoDone = React.useRef()
    function toggleStatus() {
        if (checkbox.current.checked) {
            todoName.current.classList.add('line-through')
            todoDone.current.textContent = moment().format('DD-MM-YYYY hh:mm:ss')
        } else {
            setStatus(false)
            todoName.current.classList.remove('line-through')
            todoDone.current.textContent = ''
        }
    }
    return (
        <label>
            <div className="flex gap-4 flex-1">
                <input ref={checkbox} type="checkbox" id="checkbox" name="todo" className="w-7 h-7" onChange={toggleStatus} />
                <span ref={todoName}>Tugas 1</span>
            </div>
            <div className="flex flex-col pl-16 flex-1">
                <div className="flex">
                    <span className="font-bold w-50">Tanggal dibuat:</span>
                    {/* <span ref={todoCreated} className="flex"> 28 Januari 2026</span> */}
                </div>
                <div className="flex">
                    <span className="font-bold w-50">Target selesai:</span>
                    <span ref={todoDeadline} className="flex">02 Februari 2026</span>
                </div>
                <div className="flex">
                    <span className="font-bold w-50">Selesai pada:</span>
                    <span ref={todoDone} className="flex">01 Februari 2026</span>
                </div>
            </div>
        </label>
    )
}

function App() {
    return (
        <section>
            <div className="container w-3xl p-4 mx-auto my-4 flex flex-col gap-4">
                <div className="section-header rounded bg-white shadow p-4 flex justify-center items-center">
                    <h1 className="text-xl font-bold">ToDo List React App</h1>
                </div>
                <div className="section-body rounded bg-white shadow p-4 flex flex-col justify-center items-center gap-4">
                    <h1 className="w-full text-xl font-bold">To Do:</h1>
                    <ul className="w-full flex flex-col gap-4">
                        <li>
                            <TodoItem />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default App
