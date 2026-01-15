import "dotenv/config"
import express from "express"
import { movieRouter } from "./routes/movieRoutes.js"

const PORT = process.env.PORT || 3000
const app = express()

// This is a middleware that allows the server to accept JSON requests
app.use(express.json())

// This is a middleware that allows the server to accept requests to the /movies endpoint
app.use("/movies", movieRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})