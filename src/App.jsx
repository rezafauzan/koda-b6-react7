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
                            <label className="flex gap-4 w-full">
                                <input type="checkbox" id="checkbox" name="todo" className="w-7 h-7"/>
                                <span>Tugas 1</span>
                                <span><span className="font-bold">Tanggal dibuat:</span> 28 Januari 2026</span>
                                <span><span className="font-bold">Target selesai:</span> 02 Februari 2026</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default App
