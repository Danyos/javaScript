# 💳 Bank ATM — React UI Project

This project is a **React-based ATM (bank machine) UI**.  
It focuses on **design + component structure**, so you (or your students) can later attach full business logic (PIN checks, balance updates, history, etc.).

> 🔰 Current version:
> - **Design-only** (no real API / backend)
> - All screens (views) are present in the UI
> - Logic (state, PIN, balance) is intentionally left for practice

---

## 📁 Project Structure

Recommended structure for the project:

```text
atm-react/
│
├── public/
│   └── index.html              # Base HTML template (React root DIV)
│
├── src/
│   ├── App.js                  # Main React component (mount point)
│   ├── App.css                 # Full ATM design styles
│   │
│   ├── components/
│   │   └── atm/
│   │       ├── ATMLayout.jsx   # Main ATM layout (wraps all sections)
│   │       ├── ATMHeader.jsx   # Top header: logo + status
│   │       ├── ATMScreen.jsx   # Central ATM screen container
│   │       ├── ATMViews/       # Separate UI "pages" (views)
│   │       │   ├── ViewWelcome.jsx
│   │       │   ├── ViewLoginPin.jsx
│   │       │   ├── ViewPinError.jsx
│   │       │   ├── ViewBlocked.jsx
│   │       │   ├── ViewMenu.jsx
│   │       │   ├── ViewBalance.jsx
│   │       │   ├── ViewWithdraw.jsx
│   │       │   ├── ViewWithdrawSuccess.jsx
│   │       │   ├── ViewWithdrawError.jsx
│   │       │   ├── ViewChangePin.jsx
│   │       │   ├── ViewChangePinSuccess.jsx
│   │       │   ├── ViewChangePinError.jsx
│   │       │   ├── ViewDate.jsx
│   │       │   └── ViewHistory.jsx
│   │       ├── ATMButtons.jsx  # Bottom button grid ("Balance", "Withdraw", etc.)
│   │       ├── CardPanel.jsx   # Right side card container
│   │       ├── CardList.jsx    # Renders list of cards
│   │       └── CardItem.jsx    # Single card UI
│   │
│   ├── context/
│   │   └── ATMContext.jsx      # (Optional / Advanced) global state (activeCard, activeView, cards)
│   │
│   ├── data/
│   │   └── cards.js            # Mock card data (name, number, pin, balance, history…)
│   │
│   └── index.js                # React entry point (ReactDOM.render)
│
└── package.json
