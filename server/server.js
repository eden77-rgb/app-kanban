/* API: ExpressJS - Nodemon*/

const express = require("express")
const cors = require("cors")
const { tasks } = require("./tasks")

const app = express()
const port = 3000

const corsOptions = {
    origin: [
        "http://localhost:5237",
        "http://127.0.0.1:5173",
    ]
}

app.use(cors(corsOptions))


app.get("/", (req, res) => {
    res.json({ message: "Hello" })
})

app.get("/health", (req, res) => {
    res.json({ status: 200, ok: true })
})

app.get("/api/tasks", (req, res) => {
    res.json({ status: 200, tasks: tasks })
})

app.get("/api/tasks/:id", (req, res) => {
    let id = req.params.id
    let taskId = tasks.find((task) => { if (task.id == id) { return task } })

    res.json({ status: 200, task: taskId ? taskId : null })
})


app.listen(port, () => {
    console.log("Serveur démarrer sur : http://localhost:3000")
})
