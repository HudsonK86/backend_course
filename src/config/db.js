import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
    log: 
    process.env.NODE_ENV === "development" 
    ? ["query", "info", "warn", "error"] 
    : ["error"],
})

export const connectDB = async () => {
    try {
        await prisma.$connect()
        console.log("Connected to the database via Prisma")
    } catch (error) {
        console.error("Error connecting to the database", error)
        process.exit(1)
    }
}

export const disconnectDB = async () => {
    try {
        await prisma.$disconnect()
        console.log("Disconnected from the database via Prisma")
    } catch (error) {
        console.error("Error disconnecting from the database", error)
        process.exit(1)
    }
}