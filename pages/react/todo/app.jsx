// App.js (design-only)
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
                            Կազմակերպիր օրդ․ ավելացրու, ֆիլտրիր, փոխիր առաջնահերթությունները 👇
                        </div>
                    </div>

                    {/* Search (design only) */}
                    <div className="search-wrap">
                        <input
                            className="form-control search"
                            placeholder="Որոնել…"
                            
                        />
                    </div>
                </div>

                {/* Tabs & sort (design only) */}
                <div className="tabs">
                    <button className="tab active" >
                        All <span className="tab-badge">3</span>
                    </button>
                    <button className="tab" >
                        Pending <span className="tab-badge">1</span>
                    </button>
                    <button className="tab" >
                        In Progress <span className="tab-badge">1</span>
                    </button>
                    <button className="tab" >
                        Completed <span className="tab-badge">1</span>
                    </button>

                    <div className="tabs-spacer" />

                    <div className="sort">
                        <label className="sort-label">Sort</label>
                        <select className="form-select sort-select" >
                            <option>Newest</option>
                            <option>By Status</option>
                            <option>A → Z</option>
                        </select>
                    </div>
                </div>

                <div className="divider" />

                {/* Add form (design only) */}
                <div className="form-zone">
                    <div className="row g-2">
                        <div className="col-md-7">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Գրիր առաջադրանքը…"
                                
                            />
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" >
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                        <div className="col-md-2 d-grid">
                            <button className="btn btn-add" >
                                Ավելացնել
                            </button>
                        </div>
                    </div>
                </div>

                {/* List (static demo items) */}
                <div className="list-holder">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="task-left">
                                <span className="task-text">asdfghjkl #1</span>
                                <span className="badge status status-pending">Pending</span>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn-ghost btn-del" >Delete</button>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="task-left">
                                <span className="task-text">qwertyuio #2</span>
                                <span className="badge status status-progress">In Progress</span>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn-ghost btn-del" >Delete</button>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="task-left">
                                <span className="task-text">zxcvbnm #3</span>
                                <span className="badge status status-done">Completed</span>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn-ghost btn-del" >Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Footer note */}
                <div className="hint">
                    💡 Սա մաքուր UI է․ input-ները/կոճակները անջատված են, որ դու հետո կապես քո logic-ին։
                </div>
            </div>
        </div>
    );
}
