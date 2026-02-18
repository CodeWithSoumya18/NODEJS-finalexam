import express from "express"
import bodyParser from "body-parser"
import mongoose, { connect } from "mongoose"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/db.js"


import authRoutes from "./routes/authRoutes.js"

dotenv.config()
connectDB()

const app= express()
app.use (cookieParser())
app.use( express.urlencoded({extended:true}))

app.use ("/",authRoutes)


app.listen(4000,()=>
console.log("server running on 4000 !"))
