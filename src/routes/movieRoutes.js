import express from "express"

export const movieRouter = express.Router()

movieRouter.get("/", (req, res) => {
    res.json({ message: "Hello from movies, GET request"})
})

movieRouter.post("/", (req, res) => {
    res.json({ message: "Hello from movies, POST request"})
})

movieRouter.put("/", (req, res) => {
    res.json({ message: "Hello from movies, PUT request"})
})

movieRouter.delete("/", (req, res) => {
    res.json({ message: "Hello from movies, DELETE request"})
})