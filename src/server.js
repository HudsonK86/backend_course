import "dotenv/config"
import express from "express"

const PORT = process.env.PORT || 3000
const app = express()

// This is a middleware that allows the server to accept JSON requests
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})