/* API: ExpressJS - Nodemon*/

const express = require("express")
const cors = require("cors")
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

app.listen(port, () => {
    console.log("Serveur démarrer sur : http://localhost:3000")
})
