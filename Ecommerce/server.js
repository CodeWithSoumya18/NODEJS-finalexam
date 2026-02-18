import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

import authRoutes from "./routes/auth.routes.js"
import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"

dotenv.config()
connectDB()

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/", authRoutes)
app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)

app.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
)
