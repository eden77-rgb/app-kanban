/* API: ExpressJS - Nodemon
 *
 * GET /health
 *    200 : OK
 *    500 : Internal Server Error
 * 
 * GET /api/tasks
 *    200 : OK
 *    500 : Internal Server Error
 * 
 * GET /api/tasks/:id
 *    200 : OK
 *    404 : Not Found
 *    500 : Internal Server Error
 * 
 * POST /api/tasks
 *    201 : Created
 *    400 : Bad Request
 *    500 : Internal Server Error
 * 
 * PATCH /api/tasks/:id
 *    200 : OK
 *    400 : Bad Request
 *    404 : Not Found
 *    500 : Internal Server Error
 * 
 * DELETE /api/tasks/:id
 *    200 : OK
 *    404 : Not Found
 *    500 : Internal Server Error
 */

const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()
const port = 3000

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]
}


function getTask(tasks, id) {
    return tasks.find((task) => { if (task.id == id) { return task } })
}

let tasks

try {
    tasks = JSON.parse(fs.readFileSync("./data/data.json", "utf8"))

} catch (error) {
    tasks = null
}

app.use(cors(corsOptions))
app.use(express.json())


app.get("/", (req, res) => {
    res.json({ message: "Hello" })
})

app.get("/health", (req, res) => {
    if (!tasks) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    res.json({ status: 200, ok: true })
})

app.get("/api/tasks", (req, res) => {
    if (!tasks) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    res.json({ status: 200, ok: true, tasks: tasks })
})

app.get("/api/tasks/:id", (req, res) => {
    if (!tasks) {
        res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    let id = req.params.id
    let taskId = getTask(tasks, id)
    if (!taskId) {
        return res.json({ status: 404, ok: false, error: "Not Found" })

    }

    res.json({ status: 200, ok: true, task: taskId })
})


app.post("/api/tasks", (req, res) => {
    if (!tasks) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    const { title, description, state, assigne } = req.body
    const id = tasks.length + 1
    const date = new Date()
    const dateFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

    try {
        if (typeof title != "string") {
            throw new Error("title")
        }

        if (typeof description != "string") {
            throw new Error("description")
        }

        if (typeof state != "string" || !["todo", "doing", "done"].includes(state)) {
            throw new Error("state")
        }

        if (typeof assigne != "string") {
            throw new Error("assigne")
        }

    } catch (error) {
        return res.json({ status: 400, ok: false, error: `Bad Request : ${error.message}` })
    }

    let newTask = {
        id: id,
        title: title,
        description: description,
        state: state,
        assigne: assigne,
        date: dateFormat
    }

    tasks.push(newTask)
    try {
        fs.writeFileSync("./data/data.json", JSON.stringify(tasks, null, 2))
    } catch (error) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    res.json({ status: 201, ok: true, tasks: tasks })
})


app.patch("/api/tasks/:id", (req, res) => {
    if (!tasks) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    const task = getTask(tasks, req.params.id)
    if (!task) {
        return res.json({ status: 404, ok: false, error: "Not Found" })
    }

    const { state } = req.body
    if (typeof state != "string" || !["todo", "doing", "done"].includes(state)) {
        return res.json({ status: 400, ok: false, error: "Bad Request : state" })
    }

    task.state = state
    try {
        fs.writeFileSync("./data/data.json", JSON.stringify(tasks, null, 2))
    } catch (error) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    res.json({ status: 200, ok: true, task: task })
})


app.delete("/api/tasks/:id", (req, res) => {
    if (!tasks) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    const id = req.params.id
    const taskDelete = getTask(tasks, id)
    if (!taskDelete) {
        return res.json({ status: 404, ok: false, error: "Not Found" })
    }

    let index = tasks.findIndex(task => task.id == taskDelete.id)
    tasks.splice(index, 1)

    try {
        fs.writeFileSync("./data/data.json", JSON.stringify(tasks, null, 2))
    } catch (error) {
        return res.json({ status: 500, ok: false, error: "Internal Server Error" })
    }

    res.json({ status: 200, ok: true, tasks: tasks })
})

app.listen(port, () => {
    console.log("Serveur démarré sur : http://localhost:3000")
})
