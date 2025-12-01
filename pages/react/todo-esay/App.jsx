// App.js
import "./App.css";

export default function App() {
    return (
        <div className="app-wrap">
            <div className="glass-card">
                {/* Header */}
                <div className="app-header">
                    <div>
                        <h1 className="app-title h3 mb-1">Todo List</h1>
                        <div className="sub">
                            Կարգավորիր օրվա առաջնահերթությունները՝ պարզ ու արագ 👇
                        </div>
                    </div>
                </div>

                <div className="divider" />

                {/* Form (design-only) */}
                <div className="form-zone">
                    <div className="row g-2">
                        <div className="col-md-7">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Գրիր առաջադրանքը…"
                                readOnly
                            />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" disabled>
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                        <div className="col-md-2 d-grid">
                            <button className="btn btn-add" disabled>
                                Ավելացնել
                            </button>
                        </div>
                    </div>
                </div>

                {/* List (static demo items) */}
                <div className="list-holder">
                    <ul className="list-group" id="todoList">
                        <li className="list-group-item">
                            <div className="task-left">
                                <span className="task-text">asdfghjkl #1</span>
                                <span className="task-status status-pending">Pending</span>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn-ghost btn-edit" disabled>Edit</button>
                                <button className="btn-ghost btn-del" disabled>Delete</button>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="task-left">
                                <span className="task-text">qwertyuio #2</span>
                                <span className="task-status status-progress">In Progress</span>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn-ghost btn-edit" disabled>Edit</button>
                                <button className="btn-ghost btn-del" disabled>Delete</button>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="task-left">
                                <span className="task-text">zxcvbnm #3</span>
                                <span className="task-status status-done">Completed</span>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn-ghost btn-edit" disabled>Edit</button>
                                <button className="btn-ghost btn-del" disabled>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
