import User from "../model/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export const register = async (req,res)=>{
    const hashed = await bcrypt.hash(req.body.password,10)

    await User.create({username:req.body.username},{password:hashed})
    res.redirect("/login")
}
 
export const login = async(req , res)=> {
    const user = await User.findOne({username:req.body.username})

    if(!user)
    {
        return res.send("user not found")
    }
    const match = 
    await bcrypt.compare(req.body.password,user.password)

    if (!match)
    {
        return res.send("Wrong password")
    }
    const token = jwt.sign(
    {
        id: User._id , role : User.role
    },
    process.env.JWT_SECRET
   
)
res.cookies ("token",token).redirect("/products")
}


export const logout = async(req,res)=>{
    res.clearcookie("token").redirect("/login")
}

