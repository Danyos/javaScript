import express from "express";

const router = express.Router();

// Middleware՝ session-ում todo-ների համար
router.use((req, res, next) => {
    if (!req.session.todos) {
        req.session.todos = [];
    }
    next();
});

// GET - Բոլոր Todo-ները ստանալ
router.get("/", (req, res) => {
    res.json({ todos: req.session.todos });
});

// POST - Նոր Todo ավելացնել
router.post("/", (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Todo cannot be empty" });
    }
    req.session.todos.push({ id: Date.now(), text });
    res.json({ message: "Todo added", todos: req.session.todos });
});

// DELETE - Todo ջնջել ըստ ID-ի
router.delete("/:id", (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    req.session.todos = req.session.todos.filter(todo => todo.id !== todoId);
    res.json({ message: "Todo deleted", todos: req.session.todos });
});

export default router;
