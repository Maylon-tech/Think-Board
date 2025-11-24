import express from "express"
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from "./middleware/rateLimiter.js"

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5001

// Middleware
app.use(express.json())
app.use(rateLimiter)
// Simple middelware custom
// app.use((req, res, next) => {
//     console.log("We just got a new Requset..")
//     next()
// })


app.use("/api/notes", notesRoutes)
// app.use("/api/clients", clientsRoutes)
// app.use("/api/cars", carsRoutes)
// app.use("/api/services", servicesRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started already on PORT:!!", PORT)
    })
})

// mongodb+srv://notesapp:<db_password>@notesapp.v54bzrx.mongodb.net/?retryWrites=true&w=majority&appName=notesapp

// mongodb+srv://minatokiroisen77_db_user:<db_password>@cluster0.sgo7q58.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//  mongodb+srv://mmnemoto8187_db_user:R4BpuUhee86urFnl@cluster0.onq9qi1.mongodb.net/?appName=Cluster0

// mmnemoto8187_db_user  --  R4BpuUhee86urFnl
