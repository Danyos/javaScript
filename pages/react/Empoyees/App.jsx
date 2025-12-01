export default function App(){
    return (
        <div className="app" data-theme="dark">
            {/* HEADER */}
            <header className="app-header">
                <div className="brand">
                    <span className="brand-icon" aria-hidden>👥</span>
                    <span className="brand-name">Employees <b>Dashboard</b></span>
                </div>
                <div className="header-actions">
                    <span className="header-note">UI only • React</span>
                    <button className="btn ghost" aria-label="Toggle theme">☀️</button>
                </div>
            </header>

            {/* MAIN */}
            <main className="container">
                {/* KPI CARDS */}
                <section className="kpis">
                    <div className="kpi-card">
                        <div className="kpi-label">Ընդհանուր աշխատավարձ</div>
                        <div className="kpi-value">—</div>
                        <div className="kpi-sub">AMD</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">Միջին / Մեդիան</div>
                        <div className="kpi-value">— / —</div>
                        <div className="kpi-sub">salary (AMD)</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">Remote տոկոս</div>
                        <div className="kpi-value">—%</div>
                        <div className="kpi-sub">remote / total</div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-label">Միջին Performance</div>
                        <div className="kpi-value">—</div>
                        <div className="kpi-sub">0–100</div>
                    </div>
                </section>

                {/* FILTERS BAR */}
                <section className="toolbar">
                    <form className="filters" onSubmit={(e)=>e.preventDefault()}>
                        <div className="field">
                            <label>Որոնում (անուն/հմտություն)</label>
                            <input type="search" placeholder="Օր. Aram կամ JS" />
                        </div>
                        <div className="field">
                            <label>Բաժին</label>
                            <select defaultValue="">
                                <option value="">Բոլորը</option>
                                <option>Engineering</option>
                                <option>Design</option>
                                <option>HR</option>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Support</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Քաղաք</label>
                            <select defaultValue="">
                                <option value="">Բոլորը</option>
                                <option>Yerevan</option>
                                <option>Gyumri</option>
                                <option>Vanadzor</option>
                                <option>Ijevan</option>
                                <option>Hrazdan</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Ճկունություն</label>
                            <select defaultValue="">
                                <option value="">Բոլորը</option>
                                <option value="true">Remote</option>
                                <option value="false">Onsite</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Սորտավորում</label>
                            <select defaultValue="name.asc">
                                <option value="name.asc">Անուն ↑</option>
                                <option value="name.desc">Անուն ↓</option>
                                <option value="salary.desc">Salary ↓</option>
                                <option value="salary.asc">Salary ↑</option>
                                <option value="performance.desc">Performance ↓</option>
                                <option value="performance.asc">Performance ↑</option>
                                <option value="hiredAt.desc">Newest Hires</option>
                                <option value="hiredAt.asc">Oldest Hires</option>
                            </select>
                        </div>
                        <div className="field reset">
                            <button className="btn outline" type="button">Reset</button>
                        </div>
                    </form>
                    <div className="chips">
                        {/* Active filter chips will appear here by your logic */}
                        <span className="chip muted">Արդյունքներ: <b>—</b></span>
                    </div>
                </section>

                {/* GRID TABLE */}
                <section className="card">
                    <div className="table-wrap">
                        <table className="grid">
                            <thead>
                            <tr>
                                <th data-key="name">Անուն</th>
                                <th data-key="dept">Բաժին</th>
                                <th data-key="city">Քաղաք</th>
                                <th className="text-end" data-key="salary">Salary</th>
                                <th className="text-center" data-key="isRemote">Remote</th>
                                <th className="text-center" data-key="projects">Projects</th>
                                <th className="text-center" data-key="performance">Perf</th>
                                <th data-key="hiredAt">Ընկերությունում</th>
                                <th>Հմտություններ</th>
                                <th className="text-end">Գործողություն</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Static demo rows (UI only) */}
                            {Array.from({length:6}).map((_,i)=> (
                                <tr key={i}>
                                    <td>
                                        <div className="fw">Անուն {i+1}</div>
                                        <div className="muted">#{100+i} · — տարեկան</div>
                                    </td>
                                    <td>—</td>
                                    <td>—</td>
                                    <td className="text-end">—</td>
                                    <td className="text-center">
                                        <span className="badge">—</span>
                                    </td>
                                    <td className="text-center">—</td>
                                    <td className="text-center">—</td>
                                    <td>
                                        <div>—</div>
                                        <div className="muted">— օր</div>
                                    </td>
                                    <td>
                                        <span className="tag">JS</span>
                                        <span className="tag">React</span>
                                    </td>
                                    <td className="text-end">
                                        <button className="btn sm primary" type="button">Տեսնել</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="empty">Ոչ մի արդյունք չի գտնվել… Փորձիր փոխել ֆիլտրերը։</div>
                </section>

                {/* PAGINATION */}
                <section className="pager">
                    <div className="muted">Էջ <b>1</b> / <b>1</b></div>
                    <div className="btn-group">
                        <button className="btn outline" type="button">‹</button>
                        <button className="btn outline" type="button">›</button>
                    </div>
                </section>
            </main>

            {/* DETAIL MODAL (only visual) */}
            <dialog className="modal" open={false}>
                <div className="modal-card">
                    <div className="modal-header">
                        <h3>Անուն — մանրամասներ</h3>
                        <button className="btn ghost" aria-label="Close">✖</button>
                    </div>
                    <div className="modal-body">
                        <dl className="dl">
                            <div className="dl-row"><dt>Բաժին</dt><dd>—</dd></div>
                            <div className="dl-row"><dt>Քաղաք</dt><dd>—</dd></div>
                            <div className="dl-row"><dt>Աշխ. ձևաչափ</dt><dd>—</dd></div>
                            <div className="dl-row"><dt>Salary</dt><dd>— AMD</dd></div>
                            <div className="dl-row"><dt>Projects</dt><dd>—</dd></div>
                            <div className="dl-row"><dt>Performance</dt><dd>—/100</dd></div>
                            <div className="dl-row"><dt>Սկսել է</dt><dd>—</dd></div>
                            <div className="dl-row"><dt>Կոնտակտ</dt><dd>— · —</dd></div>
                        </dl>
                    </div>
                    <div className="modal-footer">
                        <button className="btn primary" type="button">Լավ</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
}