export const role = async (req,res,next)=> {
    if(req.user.role !== role )
    {
        return res.send("Access denide !")
    }
    next()
}
