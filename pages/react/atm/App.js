import React from "react";
import "./App.css";

function App() {
    return (
        <div className="atm-wrapper">
            <div className="atm-shell">
                {/* HEADER */}
                <div className="atm-header">
                    <div className="atm-brand">
                        <div className="atm-logo-circle">
                            <span>DS</span>
                        </div>
                        <div className="atm-brand-text">
                            <div className="title">Danisoft ATM</div>
                            <div className="subtitle">Secure • Instant • Smart</div>
                        </div>
                    </div>
                    <div className="atm-status">
                        <span className="atm-status-dot" />
                        <span>Օնլայն ռեժիմ</span>
                    </div>
                </div>

                {/* MAIN */}
                <div className="atm-main">
                    <div className="row g-3">
                        {/* LEFT SIDE */}
                        <div className="col-lg-8">
                            <div className="atm-screen-wrapper">
                                <div className="atm-screen-top">
                                    <span>Տեղեկատվություն</span>
                                    <span id="atmUserHint">
                    Քարտ ընտրելուց հետո մուտքագրեք PIN
                  </span>
                                </div>

                                <div className="atm-screen" id="atmScreen">
                                    {/* VIEW: Welcome */}
                                    <div className="atm-view atm-view-welcome">
                                        Խնդրում ենք ընտրել քարտ՝ աջ կողքի ցուցակից։
                                    </div>

                                    {/* VIEW: Login (PIN) */}
                                    <div className="atm-view atm-view-login d-none">
                                        <div className="mb-1">
                                            Ընտրված քարտ՝{" "}
                                            <strong>VISA •••• 1234</strong>
                                        </div>
                                        <div>Մուտքագրեք PIN՝</div>
                                        <input
                                            type="password"
                                            className="form-control form-control-sm mt-2"
                                            maxLength={4}
                                            placeholder="****"
                                        />
                                    </div>

                                    {/* VIEW: Wrong PIN */}
                                    <div className="atm-view atm-view-pin-error d-none">
                                        <div className="text-danger fw-semibold mb-1">
                                            Սխալ PIN (1/3)
                                        </div>
                                        <div>Կրկին մուտքագրեք՝</div>
                                        <input
                                            type="password"
                                            className="form-control form-control-sm mt-2"
                                            maxLength={4}
                                            placeholder="****"
                                        />
                                        <small className="text-muted d-block mt-2">
                                            3 սխալից հետո քարտը կբլոկվի։
                                        </small>
                                    </div>

                                    {/* VIEW: Card Blocked */}
                                    <div className="atm-view atm-view-blocked d-none">
                                        <div className="text-danger fw-semibold mb-2">
                                            Քարտը բլոկավորված է։
                                        </div>
                                        <div>
                                            Խնդրում ենք փորձել այլ քարտ կամ դիմել բանկ՝ քարտը
                                            վերականգնելու համար։
                                        </div>
                                    </div>

                                    {/* VIEW: Main menu after login */}
                                    <div className="atm-view atm-view-menu d-none">
                                        Բարի գալուստ, <strong>Անի Գրիգորյան</strong> 🟢
                                        <br />
                                        Ընտրեք ծառայություն ներքևի կոճակներից։
                                    </div>

                                    {/* VIEW: Balance */}
                                    <div className="atm-view atm-view-balance d-none">
                                        <div
                                            className="alert alert-success py-2 px-3 mb-2"
                                            style={{ background: "var(--primary-soft)" }}
                                        >
                                            Ձեր ընթացիկ մնացորդը՝{" "}
                                            <strong>95,000 դրամ</strong>
                                        </div>
                                        <small className="text-muted">
                                            Կարող եք շարունակել այլ գործարք կամ դուրս գալ համակարգից։
                                        </small>
                                    </div>

                                    {/* VIEW: Withdraw */}
                                    <div className="atm-view atm-view-withdraw d-none">
                                        <div className="mb-2">
                                            Մուտքագրեք կանխիկացման գումարը (դրամ)
                                        </div>
                                        <input
                                            type="number"
                                            className="form-control form-control-sm mt-1"
                                            placeholder="Օրինակ՝ 10000"
                                            min={0}
                                        />
                                        <button className="btn btn-success btn-sm mt-2">
                                            Հաստատել կանխիկացումը
                                        </button>
                                        <small className="text-muted d-block mt-2">
                                            Խնդրում ենք ստուգել մնացորդը մինչև մեծ գումար կանխիկացնելը։
                                        </small>
                                    </div>

                                    {/* VIEW: Withdraw error (insufficient funds) */}
                                    <div className="atm-view atm-view-withdraw-error d-none">
                                        <div
                                            className="alert alert-danger mt-2"
                                            style={{
                                                background: "var(--danger-soft)",
                                                color: "#f87171",
                                            }}
                                        >
                                            Մնացորդը բավարար չէ կանխիկացման համար։
                                        </div>
                                    </div>

                                    {/* VIEW: Withdraw success */}
                                    <div className="atm-view atm-view-withdraw-success d-none">
                                        <div
                                            className="alert alert-success mt-2"
                                            style={{
                                                background: "var(--primary-soft)",
                                                color: "#22c55e",
                                            }}
                                        >
                                            Դուք հաջողությամբ կանխիկացրեցիք{" "}
                                            <strong>20,000 դրամ</strong>
                                            <br />
                                            Նոր մնացորդը՝ <strong>75,000 դրամ</strong>
                                        </div>
                                    </div>

                                    {/* VIEW: PIN change */}
                                    <div className="atm-view atm-view-changepin d-none">
                                        <div className="mb-1 fw-semibold">PIN փոփոխություն</div>
                                        <small className="text-muted d-block mb-2">
                                            Ապահովության համար մուտքագրեք հին PIN-ը և կրկնեք նոր PIN-ը։
                                        </small>

                                        <div className="mb-1">Հին PIN:</div>
                                        <input
                                            type="password"
                                            className="form-control form-control-sm mb-2"
                                            maxLength={4}
                                        />

                                        <div className="mb-1">Նոր PIN:</div>
                                        <input
                                            type="password"
                                            className="form-control form-control-sm mb-2"
                                            maxLength={4}
                                        />

                                        <div className="mb-1">Կրկնեք նոր PIN:</div>
                                        <input
                                            type="password"
                                            className="form-control form-control-sm mb-2"
                                            maxLength={4}
                                        />

                                        <button className="btn btn-success btn-sm mt-2">
                                            Հաստատել փոփոխությունը
                                        </button>
                                    </div>

                                    {/* VIEW: PIN change success */}
                                    <div className="atm-view atm-view-changepin-success d-none">
                                        <div
                                            className="alert alert-success mt-2"
                                            style={{
                                                background: "var(--primary-soft)",
                                                color: "#22c55e",
                                            }}
                                        >
                                            PIN-ը հաջողությամբ փոխվեց։
                                        </div>
                                    </div>

                                    {/* VIEW: PIN change error */}
                                    <div className="atm-view atm-view-changepin-error d-none">
                                        <div
                                            className="alert alert-danger mt-2"
                                            style={{
                                                background: "var(--danger-soft)",
                                                color: "#f87171",
                                            }}
                                        >
                                            Հին PIN-ը սխալ է կամ նոր PIN-ները չեն համընկնում։
                                        </div>
                                    </div>

                                    {/* VIEW: Card issue date */}
                                    <div className="atm-view atm-view-date d-none">
                                        Քարտի թողարկման ամսաթիվ՝{" "}
                                        <strong>2022-02-01</strong>
                                    </div>

                                    {/* VIEW: History */}
                                    <div className="atm-view atm-view-history d-none">
                                        Վերջին գործարքներ՝
                                        <ul className="mt-2 mb-0">
                                            <li className="expense">
                                                2025-03-25 — -5,000 դրամ — Սուպերմարկետ
                                            </li>
                                            <li className="income">
                                                2025-03-20 — +100,000 դրամ — Փոխանցում ընկերոջից
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="atm-card-slot">
                                <div className="atm-card-slot-inner" />
                            </div>

                            <div className="atm-buttons-grid mt-3">
                                <button className="atm-btn-main atm-btn-secondary">
                                    <span>Մնացորդ</span>
                                </button>
                                <button className="atm-btn-main atm-btn-secondary">
                                    <span>Կանխիկացնել</span>
                                </button>
                                <button className="atm-btn-main atm-btn-secondary">
                                    <span>Փոխել PIN</span>
                                </button>
                                <button className="atm-btn-main atm-btn-secondary">
                                    <span>Թողարկման ամսաթիվ</span>
                                </button>
                                <button className="atm-btn-main atm-btn-secondary">
                                    <span>Պատմություն</span>
                                </button>
                                <button className="atm-btn-main atm-btn-danger">
                                    <span>Ելք / Չեղարկել</span>
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE – Cards */}
                        <div className="col-lg-4">
                            <div className="card-panel">
                                <div className="card-panel-headline">
                                    <h5>ՁԵՐ ՔԱՐՏԵՐԸ</h5>
                                    <span>Ընտրեք քարտ՝ մուտք գործելու համար</span>
                                </div>

                                <div className="card-list" id="cardList">
                                    {/* Card 1 */}
                                    <div className="bank-card active">
                                        <div className="bank-card-header">
                                            <span>VISA</span>
                                            <span className="badge-status">Ակտիվ</span>
                                        </div>
                                        <div className="bank-card-number">VISA •••• 1234</div>
                                        <div className="bank-card-name">Անի Գրիգորյան</div>
                                        <div className="bank-card-footer">
                      <span>
                        Մնացորդ՝ <strong>95,000 ֏</strong>
                      </span>
                                            <span>Սկիզբ՝ 2022-02-01</span>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bank-card">
                                        <div className="bank-card-header">
                                            <span>MASTERCARD</span>
                                            <span className="badge-status">Ակտիվ</span>
                                        </div>
                                        <div className="bank-card-number">MASTERCARD •••• 5678</div>
                                        <div className="bank-card-name">Գևորգ Կարապետյան</div>
                                        <div className="bank-card-footer">
                      <span>
                        Մնացորդ՝ <strong>120,000 ֏</strong>
                      </span>
                                            <span>Սկիզբ՝ 2021-08-15</span>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bank-card">
                                        <div className="bank-card-header">
                                            <span>ARCA</span>
                                            <span className="badge-status">Ակտիվ</span>
                                        </div>
                                        <div className="bank-card-number">ARCA •••• 7777</div>
                                        <div className="bank-card-name">Լիլիթ Հովհաննիսյան</div>
                                        <div className="bank-card-footer">
                      <span>
                        Մնացորդ՝ <strong>78,500 ֏</strong>
                      </span>
                                            <span>Սկիզբ՝ 2023-01-10</span>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="bank-card">
                                        <div className="bank-card-header">
                                            <span>VISA</span>
                                            <span className="badge-status">Ակտիվ</span>
                                        </div>
                                        <div className="bank-card-number">VISA •••• 8888</div>
                                        <div className="bank-card-name">Հասմիկ Մանուկյան</div>
                                        <div className="bank-card-footer">
                      <span>
                        Մնացորդ՝ <strong>42,000 ֏</strong>
                      </span>
                                            <span>Սկիզբ՝ 2020-06-01</span>
                                        </div>
                                    </div>

                                    {/* Card 5 (blocked example) */}
                                    <div className="bank-card blocked">
                                        <div className="bank-card-header">
                                            <span>MASTERCARD</span>
                                            <span className="badge-status">Բլոկավորված</span>
                                        </div>
                                        <div className="bank-card-number">MASTERCARD •••• 9999</div>
                                        <div className="bank-card-name">Սուրեն Դավթյան</div>
                                        <div className="bank-card-footer">
                      <span>
                        Մնացորդ՝ <strong>330,000 ֏</strong>
                      </span>
                                            <span>Սկիզբ՝ 2024-03-05</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END RIGHT SIDE */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
