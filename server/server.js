/* API: ExpressJS - Nodemon*/

const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()
const port = 3000

const corsOptions = {
    origin: [
        "http://localhost:5137",
        "http://127.0.0.1:5137",
    ]
}

app.use(cors(corsOptions))
app.use(express.json())

let tasks = JSON.parse(fs.readFileSync("./data/data.json", "utf8"))

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


app.post("/api/tasks", (req, res) => {
    const { title, description, state, assigne } = req.body
    const id = tasks.length + 1
    const date = new Date()
    const dateFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

    let newTask = {
        id: id,
        title: title,
        description: description,
        state: state,
        assigne: assigne,
        date: dateFormat
    }

    tasks.push(newTask)
    fs.writeFileSync("./data/data.json", JSON.stringify(tasks, null, 2))

    res.json({ status: 200, tasks: tasks })
})


app.listen(port, () => {
    console.log("Serveur démarrer sur : http://localhost:3000")
})
