import jwt from "jsonwebtoken"

export const auth = async (req,res,next) =>
{
    const token = req.cookies.token 
    if(!token)
    {
        return res.redirect("/login")
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET)
    req.user = decode
    next()

}