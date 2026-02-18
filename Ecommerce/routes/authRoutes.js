 import { Router } from "express";
 import { register,login,logout } from "../controllers/authControllers.js";
import { auth } from "../middleware/authMiddleware.js";

 const router = Router()
 router.get("/login",auth)
 router.get("/register",auth)
 
 router.post("/register",register)
 router.post("login",login)
 router.post("logout",logout)

 export default router
 