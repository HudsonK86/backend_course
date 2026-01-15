import "dotenv/config"
import express from "express"
import { connectDB, disconnectDB } from "./config/db.js"

// Import the movie router
import { movieRouter } from "./routes/movieRoutes.js"

// Connect to the database
connectDB()

const PORT = process.env.PORT || 3000
const app = express()

// This is a middleware that allows the server to accept JSON requests
app.use(express.json())

// This is a middleware that allows the server to accept requests to the /movies endpoint
app.use("/movies", movieRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Handle unhandled promise rejections (e.g. database connection errors)
process.on("unhandledRejection", async (error) => {
    console.error("Unhandled promise rejection", error)
    server.close(async () => {
        await disconnectDB()
        process.exit(1)
    })
})

// Handle uncaught exceptions (e.g. database connection errors)
process.on("uncaughtException", async (error) => {
    console.error("Uncaught exception", error)
    server.close(async () => {
        await disconnectDB()
        process.exit(1)
    })
})

// Gracefully shutdown the server
process.on("SIGTERM", async () => {
    console.log("SIGTERM signal received")
    server.close(async () => {
        await disconnectDB()
        process.exit(0)
    })
})