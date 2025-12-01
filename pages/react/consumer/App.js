// App.js
import React from "react";
import "./App.css";

// Bootstrap CSS + Icons (կարաս տեղափոխես index.js, եթե ուզես)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
    return (
        <div className="app-root app-dark">
            <div className="container-fluid">
                <div className="row g-0">
                    {/* Sidebar */}
                    <aside className="col-12 col-lg-3 p-3 p-lg-4 app-sidebar">
                        <div className="sticky-top-20">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h4 className="m-0">🧑‍💻 WebGroup ֆիլտրեր</h4>
                                <button
                                    id="themeToggle"
                                    className="btn btn-outline-secondary btn-sm"
                                    title="Dark / Light"
                                    type="button"
                                >
                                    <i className="bi bi-brightness-high"></i>
                                </button>
                            </div>

                            {/* Quick actions */}
                            <div className="d-grid gap-2 mb-3">
                                <button className="btn btn-soft" id="btnReset" type="button">
                                    <i className="bi bi-arrow-counterclockwise me-1"></i>
                                    Սկզբնական ցուցակ
                                </button>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-soft w-100"
                                        id="btnEmployed"
                                        type="button"
                                    >
                                        Աշխատողներ
                                    </button>
                                    <button
                                        className="btn btn-soft w-100"
                                        id="btnMarried"
                                        type="button"
                                    >
                                        Ամուսնացած
                                    </button>
                                </div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-soft w-100"
                                        id="btnCarOwners"
                                        type="button"
                                    >
                                        Մեքենա ունեն
                                    </button>
                                    <button
                                        className="btn btn-soft w-100"
                                        id="btnExited"
                                        type="button"
                                    >
                                        Լքածներ
                                    </button>
                                </div>
                            </div>

                            {/* Search */}
                            <div className="mb-3">
                                <label htmlFor="searchByName" className="form-label">
                                    Փնտրել անունով
                                </label>
                                <input
                                    id="searchByName"
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="օր. Ani, David"
                                />
                            </div>

                            {/* Age filter */}
                            <div className="card card-soft mb-3">
                                <div className="card-body">
                                    <h6 className="mb-3">Տարիքային ֆիլտր</h6>
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <label className="form-label" htmlFor="ageMin">
                                                Min
                                            </label>
                                            <input
                                                id="ageMin"
                                                type="number"
                                                className="form-control"
                                                placeholder="16"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label" htmlFor="ageMax">
                                                Max
                                            </label>
                                            <input
                                                id="ageMax"
                                                type="number"
                                                className="form-control"
                                                placeholder="35"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-grid mt-3">
                                        <button
                                            className="btn btn-soft"
                                            id="btnAgeFilter"
                                            type="button"
                                        >
                                            Ֆիլտրել ըստ տարիք
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* City / Marital */}
                            <div className="card card-soft mb-3">
                                <div className="card-body">
                                    <h6 className="mb-3">Քաղաք / Կարգավիճակ</h6>
                                    <select id="citySelect" className="form-select mb-2">
                                        <option value="">— Բոլորը —</option>
                                        <option>Yerevan</option>
                                        <option>Gyumri</option>
                                        <option>Vanadzor</option>
                                        <option>Kapan</option>
                                        <option>Dilijan</option>
                                        <option>Sevan</option>
                                        <option>Abovyan</option>
                                        <option>Hrazdan</option>
                                        <option>Artashat</option>
                                        <option>Stepanakert</option>
                                    </select>
                                    <select id="maritalSelect" className="form-select">
                                        <option value="">— Ամուսն. կարգավիճակ —</option>
                                        <option value="single">single</option>
                                        <option value="married">married</option>
                                    </select>
                                </div>
                            </div>

                            {/* Sort */}
                            <div className="card card-soft mb-3">
                                <div className="card-body">
                                    <h6 className="mb-3">Սորտավորում</h6>
                                    <select id="sortSelect" className="form-select">
                                        <option value="">— Առանց սորտ —</option>
                                        <option value="az">Անուն (A–Z)</option>
                                        <option value="za">Անուն (Z–A)</option>
                                        <option value="ageAsc">Տարիք ↑</option>
                                        <option value="ageDesc">Տարիք ↓</option>
                                        <option value="balanceDesc">Հաշիվ ↓</option>
                                        <option value="balanceAsc">Հաշիվ ↑</option>
                                    </select>
                                </div>
                            </div>

                            {/* Persist + Export */}
                            <div className="d-grid gap-2">
                                <button
                                    id="btnSaveState"
                                    className="btn btn-outline-primary"
                                    type="button"
                                >
                                    <i className="bi bi-save me-1"></i>
                                    Պահել ֆիլտրերը
                                </button>
                                <button
                                    id="btnExportCsv"
                                    className="btn btn-outline-success"
                                    type="button"
                                >
                                    <i className="bi bi-filetype-csv me-1"></i>
                                    Արտահանել CSV
                                </button>
                            </div>
                            <div className="small muted mt-2">
                                Made for Daniel • Bootstrap 5 • React UI
                            </div>
                        </div>
                    </aside>

                    {/* Main */}
                    <main className="col-12 col-lg-9 p-3 p-lg-4">
                        {/* KPIs + toolbar */}
                        <div className="row g-3 align-items-stretch mb-3">
                            <div className="col-12 col-md-8">
                                <div className="card card-soft h-100">
                                    <div className="card-body d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                        <div className="kpi">
                                            <div className="text-muted">Ընդհանուր</div>
                                            <div className="value" id="kpiTotal">
                                                10
                                            </div>
                                        </div>
                                        <div className="kpi">
                                            <div className="text-muted">Աշխատողներ</div>
                                            <div className="value" id="kpiEmployed">
                                                7{" "}
                                                <span className="delta up" id="kpiEmployedPct">
                          (70%)
                        </span>
                                            </div>
                                        </div>
                                        <div className="kpi">
                                            <div className="text-muted">Միջ. տարիք</div>
                                            <div className="value" id="kpiAvgAge">
                                                25
                                            </div>
                                        </div>
                                        <div className="kpi">
                                            <div className="text-muted">Ընդհանուր հաշիվ</div>
                                            <div className="value" id="kpiSum">
                                                1,993,000 ֏
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right KPI card */}
                            <div className="col-12 col-md-4">
                                <div className="card card-soft h-100">
                                    <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                        <div>
                                            <div className="text-muted small">
                                                Ցուցադրված արդյունքներ
                                            </div>
                                            <div className="h5 m-0">
                                                <span id="countBadge">10 արդյունք</span>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn btn-outline-secondary"
                                                id="btnShareState"
                                                type="button"
                                                title="Կիսվել ֆիլտրերով"
                                            >
                                                <i className="bi bi-link-45deg"></i>
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalAdd"
                                            >
                                                <i className="bi bi-plus-lg me-1"></i>Ավելացնել
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="card card-soft mb-3">
                            <div className="card-body">
                                <div id="list" className="list-scroll">
                                    {/* Քեզ համար թողել եմ մի քանի static քարտ */}
                                    {[
                                        {
                                            id: 1,
                                            name: "Arman",
                                            city: "Yerevan",
                                            age: 22,
                                            employed: true,
                                            marital: "single",
                                            car: "Hyundai Elantra",
                                            children: 0,
                                            balance: "125,000 ֏",
                                        },
                                        {
                                            id: 2,
                                            name: "Mariam",
                                            city: "Gyumri",
                                            age: 28,
                                            employed: true,
                                            marital: "married",
                                            car: null,
                                            children: 1,
                                            balance: "89,000 ֏",
                                        },
                                        {
                                            id: 3,
                                            name: "Hayk",
                                            city: "Vanadzor",
                                            age: 31,
                                            employed: true,
                                            marital: "married",
                                            car: "Toyota Camry",
                                            children: 2,
                                            balance: "350,000 ֏",
                                        },
                                        {
                                            id: 4,
                                            name: "Ani",
                                            city: "Sevan",
                                            age: 19,
                                            employed: false,
                                            marital: "single",
                                            car: null,
                                            children: 0,
                                            balance: "42,000 ֏",
                                        },
                                        {
                                            id: 5,
                                            name: "David",
                                            city: "Stepanakert",
                                            age: 26,
                                            employed: true,
                                            marital: "single",
                                            car: "Lada Priora",
                                            children: 0,
                                            balance: "65,000 ֏",
                                        },
                                    ].map((person) => (
                                        <div className="card card-soft mb-3" key={person.id}>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between flex-wrap gap-2">
                                                    <div>
                                                        <h6 className="mb-1">{person.name}</h6>
                                                        <div className="small muted">
                                                            ID:{person.id} • Քաղաք:{person.city} • Տարիք:
                                                            {person.age}
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        {person.employed && (
                                                            <span className="badge badge-soft pill">
                                Աշխատում է
                              </span>
                                                        )}
                                                        <span className="badge badge-soft pill">
                              {person.marital}
                            </span>
                                                        {person.car && (
                                                            <span
                                                                className="badge badge-soft pill"
                                                                title={person.car}
                                                            >
                                <i className="bi bi-car-front"></i>
                              </span>
                                                        )}
                                                        <div className="row-actions btn-group">
                                                            <button
                                                                className="btn btn-outline-secondary btn-sm"
                                                                type="button"
                                                                data-id={person.id}
                                                                data-action="edit"
                                                            >
                                                                <i className="bi bi-pencil"></i>
                                                            </button>
                                                            <button
                                                                className="btn btn-outline-danger btn-sm"
                                                                type="button"
                                                                data-id={person.id}
                                                                data-action="delete"
                                                            >
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="divider"></div>
                                                <div className="small">
                                                    Երեխաներ:{person.children} • Հաշիվ:{person.balance}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="small muted">
                                Էջ <span id="pageNum">1</span> /{" "}
                                <span id="pageCount">2</span>
                            </div>
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-secondary"
                                    id="prevPage"
                                    type="button"
                                    disabled
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <button
                                    className="btn btn-outline-secondary"
                                    id="nextPage"
                                    type="button"
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Add/Edit Modal */}
            <div
                className="modal fade"
                id="modalAdd"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitle">
                                Ավելացնել մասնակից
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form id="formPerson" className="row g-3">
                                <input type="hidden" id="personId" />
                                <div className="col-6">
                                    <label className="form-label" htmlFor="personName">
                                        Անուն
                                    </label>
                                    <input className="form-control" id="personName" required />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="personAge">
                                        Տարիք
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="personAge"
                                        required
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="personCity">
                                        Քաղաք
                                    </label>
                                    <input
                                        className="form-control"
                                        id="personCity"
                                        placeholder="օր. Yerevan"
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="personBalance">
                                        Հաշիվ (֏)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="personBalance"
                                        defaultValue="0"
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="personEmployed">
                                        Աշխատում է
                                    </label>
                                    <select
                                        id="personEmployed"
                                        className="form-select"
                                        defaultValue="true"
                                    >
                                        <option value="true">Այո</option>
                                        <option value="false">Ոչ</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="personMarital">
                                        Կարգավիճակ
                                    </label>
                                    <select
                                        id="personMarital"
                                        className="form-select"
                                        defaultValue="single"
                                    >
                                        <option>single</option>
                                        <option>married</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="personCar">
                                        Մեքենա (ընտրովի)
                                    </label>
                                    <input
                                        className="form-control"
                                        id="personCar"
                                        placeholder="օր. Toyota"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                                type="button"
                            >
                                Փակել
                            </button>
                            <button className="btn btn-primary" id="btnSavePerson" type="button">
                                Պահպանել
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
